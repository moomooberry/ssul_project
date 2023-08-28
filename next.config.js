/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["youandmystory-bucket.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
