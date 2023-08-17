/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: [
      'flagsapi.com',
      'media.tenor.com',
      'firebasestorage.googleapis.com'
    ],
  },
  env: {
    MONGO_DB_CONNECTION: process.env.MONGO_DB_CONNECTION
  }
}

module.exports = nextConfig
