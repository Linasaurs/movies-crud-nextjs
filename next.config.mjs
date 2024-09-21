/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://66edcd14380821644cde0729.mockapi.io/movies/v1",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
