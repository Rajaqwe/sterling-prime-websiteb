/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "sterling-website-corporate-gifting-p1hjogzpn-sterling17.vercel.app" }
    ]
  }
};
export default nextConfig;
