import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/seo/CaseStudyPage";
import { caseStudies } from "@/lib/seo-pages";

const study = caseStudies.lerent;

export const metadata: Metadata = {
  title: study.metaTitle,
  description: study.description,
  alternates: {
    canonical: `https://aebdigital.sk/pripadove-studie/${study.slug}`,
  },
  openGraph: {
    title: study.metaTitle,
    description: study.description,
    url: `https://aebdigital.sk/pripadove-studie/${study.slug}`,
    type: "article",
    images: [{ url: study.image, width: 1200, height: 630, alt: study.imageAlt }],
  },
};

export default function LerentCaseStudyPage() {
  return <CaseStudyPage study={study} />;
}
