/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/search_rsc",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
