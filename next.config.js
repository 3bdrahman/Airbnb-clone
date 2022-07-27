/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['links.papareact.com','upload.wikimedia.org', 'img.freepik.com', 'a0.muscache.com']
  },
  env:{
    mapbox_key: 'pk.eyJ1IjoiYXlvc2VmIiwiYSI6ImNsNjJqbWJndTI4MjAza21uMjFubG1oZXEifQ.wb3Y5tgJ7Ff0_EYycJD7UA'
  }
}

module.exports = nextConfig
