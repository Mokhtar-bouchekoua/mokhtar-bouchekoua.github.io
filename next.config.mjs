/** @type {import('next').NextConfig} */
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true"

const nextConfig = {
  reactStrictMode: true,
  ...(isGitHubPagesBuild && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
}

export default nextConfig
