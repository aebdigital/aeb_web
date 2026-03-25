import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:slug(alumsist|austav|avrekon|bomif|dobritesari|efektivnestavby|ellio|hurtstav|hydrotunel|inrestsro|kosap|kostelansky|kronostav|la-ma|miroslavholecvykopoveprace|mmsadrokartony|poterymm|pramo|premona-nitra|purdom|redosi_group|revast|soki|soultrade|stamaxplus|starbuilding|stavferka|vo-vyske|zamkovadlazbamartin)',
        destination: '/templates/:slug/index.html',
      },
    ];
  },
};

export default nextConfig;
