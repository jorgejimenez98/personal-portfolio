/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['flagsapi.com'],
  },
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_APP_DOMAIN: process.env.FIREBASE_APP_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
  }
}

module.exports = nextConfig
