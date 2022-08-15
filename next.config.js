/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NVDRIVE_SERVICE_ENDPOINT: process.env.NVDRIVE_SERVICE_ENDPOINT,
  },
};
