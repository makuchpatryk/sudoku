/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/sudoku/',
  reactStrictMode: true,
  distDir: 'out',
  compiler: {
    styledComponents: true
  },
  output: 'standalone',
}
 
export default nextConfig