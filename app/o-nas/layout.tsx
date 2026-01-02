import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nás - Tím webových expertov | AEB Digital Bratislava",
  description: "Spoznajte tím AEB Digital - webovú agentúru z Bratislavy s 5+ rokmi skúseností. 120+ úspešných projektov, moderné technológie, individuálny prístup. Váš partner pre digitálnu transformáciu.",
  keywords: [
    "AEB Digital tím",
    "webová agentúra Bratislava",
    "o nás",
    "web development tím",
    "digitálna agentúra Slovensko",
    "webový dizajnéri",
    "vývojári Bratislava",
  ],
  alternates: {
    canonical: "https://aebdigital.sk/o-nas",
  },
  openGraph: {
    title: "O nás - Tím webových expertov | AEB Digital",
    description: "Spoznajte tím AEB Digital - webovú agentúru z Bratislavy s 5+ rokmi skúseností a 120+ úspešnými projektmi.",
    url: "https://aebdigital.sk/o-nas",
    type: "website",
  },
};

export default function ONasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
