/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["help.twitter.com","avatars.githubusercontent.com","media.gettyimages.com","github.com","www.facebook.com", "352zl3r81ot2rnkzo1r0n6uj-wpengine.netdna-ssl.com","th.bing.com","cdn.sanity.io"]
  }
}

module.exports = nextConfig
