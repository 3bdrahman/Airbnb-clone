/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['upload.wikimedia.org', 'img.freepik.com', 'a0.muscache.com']
  }
}

module.exports = nextConfig
