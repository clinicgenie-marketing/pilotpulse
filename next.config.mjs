/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/customers", destination: "/case-studies", permanent: true }];
  },
};

export default nextConfig;
