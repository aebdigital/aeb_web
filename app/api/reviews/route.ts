import { NextResponse } from "next/server";

type NormalizedReview = {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url: string;
  author_url?: string;
  time?: number;
};

type BusinessProfileReview = {
  reviewer?: {
    profilePhotoUrl?: string;
    displayName?: string;
    isAnonymous?: boolean;
  };
  starRating?: string;
  comment?: string;
  createTime?: string;
  updateTime?: string;
};

type BusinessProfileResponse = {
  reviews?: BusinessProfileReview[];
  averageRating?: number;
  totalReviewCount?: number;
  error?: {
    message?: string;
    status?: string;
  };
};

type PlaceReview = {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  time?: number;
};

type PlacesResponse = {
  status?: string;
  error_message?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: PlaceReview[];
  };
};

type BusinessProfileConfig = {
  accountId: string;
  locationId: string;
  accessToken?: string;
  clientId?: string;
  clientSecret?: string;
  refreshToken?: string;
};

type PlacesConfig = {
  apiKey: string;
  placeId: string;
};

const DEFAULT_PROFILE_PHOTO_URL = "https://lh3.googleusercontent.com/a/default-user=s48-c";
const DEFAULT_GOOGLE_PLACE_ID = "ChIJhXf9XG4abEcRV084_9Bv_3Q";
const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

const STAR_RATINGS: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

export async function GET() {
  try {
    const businessProfile = getBusinessProfileConfig();
    if (businessProfile.missing.length > 0) {
      return jsonError("Google Business Profile reviews are partially configured.", businessProfile.missing, 500);
    }

    if (businessProfile.config) {
      return fetchBusinessProfileReviews(businessProfile.config);
    }

    const places = getPlacesConfig();
    if (places.missing.length > 0) {
      return jsonError("Google Places reviews are partially configured.", places.missing, 500);
    }

    if (places.config) {
      return fetchPlacesReviews(places.config);
    }

    return NextResponse.json(
      {
        reviews: [],
        source: null,
        error: "Google reviews are not configured.",
      },
      { headers: CACHE_HEADERS },
    );
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return NextResponse.json(
      {
        reviews: [],
        error: "Internal Server Error",
      },
      { status: 500, headers: CACHE_HEADERS },
    );
  }
}

function getBusinessProfileConfig(): { config?: BusinessProfileConfig; missing: string[] } {
  const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID?.trim();
  const locationId = process.env.GOOGLE_BUSINESS_LOCATION_ID?.trim();
  const accessToken = process.env.GOOGLE_BUSINESS_PROFILE_ACCESS_TOKEN?.trim();
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN?.trim();
  const hasOAuthRefreshConfig = Boolean(clientId && clientSecret && refreshToken);
  const hasAnyBusinessProfileConfig = Boolean(
    accountId || locationId || accessToken || clientId || clientSecret || refreshToken,
  );

  if (!hasAnyBusinessProfileConfig) {
    return { missing: [] };
  }

  const missing: string[] = [];
  if (!accountId) missing.push("GOOGLE_BUSINESS_ACCOUNT_ID");
  if (!locationId) missing.push("GOOGLE_BUSINESS_LOCATION_ID");

  if (!accessToken && !hasOAuthRefreshConfig) {
    if (!clientId) missing.push("GOOGLE_CLIENT_ID");
    if (!clientSecret) missing.push("GOOGLE_CLIENT_SECRET");
    if (!refreshToken) missing.push("GOOGLE_REFRESH_TOKEN");
  }

  if (missing.length > 0 || !accountId || !locationId) {
    return { missing };
  }

  return {
    config: {
      accountId: normalizeAccountId(accountId),
      locationId: normalizeLocationId(locationId),
      accessToken,
      clientId,
      clientSecret,
      refreshToken,
    },
    missing: [],
  };
}

function getPlacesConfig(): { config?: PlacesConfig; missing: string[] } {
  const apiKey = firstEnvValue(["GOOGLE_PLACES_API_KEY", "GOOGLE_MAPS_API_KEY", "GOOGLE_API_KEY"]);

  if (!apiKey) {
    return { missing: [] };
  }

  const placeId = process.env.GOOGLE_PLACE_ID?.trim() || DEFAULT_GOOGLE_PLACE_ID;

  return {
    config: {
      apiKey,
      placeId,
    },
    missing: [],
  };
}

async function fetchBusinessProfileReviews(config: BusinessProfileConfig) {
  const accessToken = await getBusinessProfileAccessToken(config);
  const parent = `accounts/${config.accountId}/locations/${config.locationId}`;
  const url = new URL(`https://mybusiness.googleapis.com/v4/${parent}/reviews`);
  url.searchParams.set("pageSize", getReviewPageSize());
  url.searchParams.set("orderBy", "updateTime desc");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = (await response.json()) as BusinessProfileResponse;

  if (!response.ok) {
    console.error("Google Business Profile API Error:", response.status, data.error?.message);
    return NextResponse.json(
      {
        reviews: [],
        source: "business-profile",
        error: data.error?.message || data.error?.status || "Google Business Profile API request failed.",
      },
      { status: response.status, headers: CACHE_HEADERS },
    );
  }

  const reviews = (data.reviews || [])
    .map(normalizeBusinessProfileReview)
    .filter((review): review is NormalizedReview => Boolean(review));

  return NextResponse.json(
    {
      reviews,
      averageRating: data.averageRating,
      totalReviewCount: data.totalReviewCount,
      source: "business-profile",
    },
    { headers: CACHE_HEADERS },
  );
}

async function fetchPlacesReviews(config: PlacesConfig) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", config.placeId);
  url.searchParams.set("fields", "rating,user_ratings_total,reviews");
  url.searchParams.set("key", config.apiKey);
  url.searchParams.set("language", "sk");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("reviews_no_translations", "true");

  const response = await fetch(url);
  const data = (await response.json()) as PlacesResponse;

  if (!response.ok || data.status !== "OK") {
    console.error("Google Places API Error:", response.status, data.status, data.error_message);
    return NextResponse.json(
      {
        reviews: [],
        source: "places",
        error: data.error_message || data.status || "Google Places API request failed.",
      },
      { status: response.ok ? 500 : response.status, headers: CACHE_HEADERS },
    );
  }

  const reviews = (data.result?.reviews || [])
    .map(normalizePlaceReview)
    .filter((review): review is NormalizedReview => Boolean(review));

  return NextResponse.json(
    {
      reviews,
      averageRating: data.result?.rating,
      totalReviewCount: data.result?.user_ratings_total,
      source: "places",
    },
    { headers: CACHE_HEADERS },
  );
}

async function getBusinessProfileAccessToken(config: BusinessProfileConfig) {
  if (config.clientId && config.clientSecret && config.refreshToken) {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: config.clientId,
        client_secret: config.clientSecret,
        refresh_token: config.refreshToken,
        grant_type: "refresh_token",
      }),
    });
    const data = (await response.json()) as { access_token?: string; error?: string; error_description?: string };

    if (!response.ok || !data.access_token) {
      throw new Error(data.error_description || data.error || "Unable to refresh Google access token.");
    }

    return data.access_token;
  }

  if (config.accessToken) {
    return config.accessToken;
  }

  throw new Error("Missing Google Business Profile access token configuration.");
}

function normalizeBusinessProfileReview(review: BusinessProfileReview): NormalizedReview | null {
  const text = cleanReviewText(review.comment || "");
  if (!text) return null;

  const rating = STAR_RATINGS[review.starRating || ""] || 0;
  if (rating <= 0) return null;

  const createdAt = review.createTime || review.updateTime;

  return {
    author_name: review.reviewer?.displayName || "Google používateľ",
    rating,
    relative_time_description: createdAt ? formatRelativeTime(createdAt) : "",
    text,
    profile_photo_url: review.reviewer?.profilePhotoUrl || DEFAULT_PROFILE_PHOTO_URL,
    time: createdAt ? Math.floor(new Date(createdAt).getTime() / 1000) : undefined,
  };
}

function normalizePlaceReview(review: PlaceReview): NormalizedReview | null {
  const text = cleanReviewText(review.text || "");
  if (!text) return null;

  const rating = Math.max(0, Math.min(5, Math.round(review.rating || 0)));
  if (rating <= 0) return null;

  return {
    author_name: review.author_name || "Google používateľ",
    rating,
    relative_time_description: review.relative_time_description || "",
    text,
    profile_photo_url: review.profile_photo_url || DEFAULT_PROFILE_PHOTO_URL,
    author_url: review.author_url,
    time: review.time,
  };
}

function firstEnvValue(keys: string[]) {
  for (const key of keys) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }

  return undefined;
}

function normalizeAccountId(value: string) {
  return value.replace(/^accounts\//, "").split("/locations/")[0];
}

function normalizeLocationId(value: string) {
  const match = value.match(/locations\/([^/]+)/);
  if (match?.[1]) return match[1];

  return value.replace(/^locations\//, "");
}

function getReviewPageSize() {
  const parsed = Number(process.env.GOOGLE_REVIEWS_PAGE_SIZE || 20);
  const bounded = Math.max(1, Math.min(50, Number.isFinite(parsed) ? parsed : 20));

  return String(bounded);
}

function cleanReviewText(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function formatRelativeTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  const diffSeconds = Math.round((date.getTime() - Date.now()) / 1000);
  const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ];

  for (const [unit, seconds] of units) {
    if (Math.abs(diffSeconds) >= seconds) {
      return new Intl.RelativeTimeFormat("sk", { numeric: "auto" }).format(
        Math.round(diffSeconds / seconds),
        unit,
      );
    }
  }

  return "práve teraz";
}

function jsonError(message: string, missing: string[], status: number) {
  return NextResponse.json(
    {
      reviews: [],
      error: message,
      missing,
    },
    { status, headers: CACHE_HEADERS },
  );
}
