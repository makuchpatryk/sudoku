/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/sudoku',
  reactStrictMode,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true
  },
  output: 'standalone',
}
 
export default nextConfig