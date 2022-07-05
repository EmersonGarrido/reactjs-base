
const BASE_URL = {
  reactjs: 'https://reactjs-micro-frontend-base.vercel.app',
}

module.exports = {
  trailingSlash: true,
  basePath: '/reactjs',
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${BASE_URL.reactjs}/:path*`,
      },
    ]
  },
}
