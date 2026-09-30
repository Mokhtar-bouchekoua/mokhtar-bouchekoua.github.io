/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true"

const nextConfig = {
  reactStrictMode: true,
  ...(isGitHubPagesBuild && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
}

export default withNextIntl(nextConfig)
