/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: false,
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()
