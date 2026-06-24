const SITE_URL = "https://gasthauszurboerse.de";

export default function sitemap() {
  const now = new Date();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/speisekarte", priority: 0.9, changeFrequency: "weekly" },
    { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" },
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
