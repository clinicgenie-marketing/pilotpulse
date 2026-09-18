/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/customers", destination: "/case-studies", permanent: true },
      { source: "/case-studies/retail-fnb", destination: "/case-studies/retail-and-fnb", permanent: true },
      { source: "/case-studies/facilities", destination: "/case-studies/facilities-management", permanent: true },
      { source: "/terms", destination: "/legal", permanent: true },
      { source: "/privacy", destination: "/legal", permanent: true },
    ];
  },
};

export default nextConfig;
