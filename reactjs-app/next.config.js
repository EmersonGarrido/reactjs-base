
const BASE_URL = {
  reactjs: process.env.NODE_ENV === 'production' ? 'https://reactjs-micro-frontend-base.vercel.app' : 'http://localhost:3001',
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${BASE_URL.reactjs}/:path*`,
      },
    ]
  },
}
