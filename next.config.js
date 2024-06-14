/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: [
      'flagsapi.com',
      'media.tenor.com',
      'firebasestorage.googleapis.com',
      'drive.google.com'
    ],
  },
  env: {
    MONGO_DB_CONNECTION: process.env.MONGO_DB_CONNECTION,
    NODEMAILER_EMAIL: process.env.NODEMAILER_EMAIL,
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD
  }
}

module.exports = nextConfig
