/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const isProd = process.env.NODE_ENV === 'production'

let cdnPrefix = ''
if (isProd && process.env.CDN_PREFIX) {
  cdnPrefix = process.env.CDN_PREFIX
}

let baseUrl = 'https://thuannp.com'
if (isProd && process.env.BASE_URL) {
  baseUrl = process.env.BASE_URL
}

module.exports = withBundleAnalyzer({
  env: {
    cdnPrefix,
    baseUrl
  },
  assetPrefix: cdnPrefix
})
