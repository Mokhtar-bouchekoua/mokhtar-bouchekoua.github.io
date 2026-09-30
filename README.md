# Mokhtar Bouchekoua — portfolio

Multi-page Next.js portfolio for Mokhtar Bouchekoua, AI & Full Stack Engineer. Project copy is based on the CV and AI Engineering Portfolio PDFs in the parent folder.

The site is available in English and French, supports a persistent light/dark theme, and can send private aggregate visit statistics to Cloudflare Web Analytics.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For a production build, run `npm run build` and `npm start`.

## Pages

- `/` — introduction and selected work
- `/projects` — filterable project index
- `/projects/[slug]` — reusable case studies
- `/about` — portrait, experience, education and skills
- `/resume` — experience, education and technical focus
- `/contact` — professional links
- `/fr/` — French homepage
- `/fr/projects`, `/fr/projects/[slug]`, `/fr/about`, `/fr/resume`, `/fr/contact` — French portfolio pages

English remains the default at the root URL. The language selector keeps the visitor on the equivalent page when switching languages. The theme button remembers the selected theme and follows the device setting until the visitor chooses one.

## Content and assets

- Edit project details and links in `lib/projects.ts`.
- The original portrait is copied to `public/mokhtar-bouchekoua.jpg`.
- The CV and AI portfolio source PDFs remain outside `site`; neither is served by the website.
- Project cover visuals are optimized WebP concept illustrations in `public/projects/`. They are labeled as conceptual and are not presented as application screenshots.
- The ERP case study links to its verified public GitHub repository. Add other repository or demo links only when they match the case study and are public.

## Publish on GitHub Pages

GitHub Pages works with a public repository on GitHub Free. Use this `site` directory as the repository root; do not upload the parent folder, which contains the source PDFs. Name the repository `mokhtar-bouchekoua.github.io` if your GitHub username is `Mokhtar-bouchekoua`. The site URL will then be `https://mokhtar-bouchekoua.github.io/`.

The workflow at `.github/workflows/deploy-pages.yml` builds a static export and publishes the `out` folder. In the repository's **Settings → Pages**, choose **GitHub Actions** as the source. Push to `main` to publish or update the site. No FastAPI server is required for this portfolio.

### Private visitor statistics (optional)

Cloudflare Web Analytics shows aggregate visits and page views in the Cloudflare dashboard. No public counter is rendered on the portfolio. The analytics script is included only when a site token is configured.

1. In Cloudflare, open **Web Analytics → Add a site**, enter `mokhtar-bouchekoua.github.io`, and copy the site's JavaScript token.
2. In this GitHub repository, open **Settings → Secrets and variables → Actions → New repository secret**.
3. Name the secret `CLOUDFLARE_WEB_ANALYTICS_TOKEN` and paste the token.
4. Run the **Deploy portfolio to GitHub Pages** workflow again, or push a new commit.

The token is a public measurement identifier embedded in the generated page; it does not grant access to the Cloudflare dashboard. Keep the Cloudflare account credentials private. Visitors can see no analytics dashboard or visit counter.

To inspect the static output locally in PowerShell:

```powershell
$env:GITHUB_PAGES = "true"
$env:NEXT_PUBLIC_SITE_URL = "https://mokhtar-bouchekoua.github.io"
npm run build
```

For local analytics, also set `NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` in a local `.env.local` file. Do not commit that file.

The generated site is in `out/`. Remove those two environment variables before using `npm start`; that command runs the normal Next.js server build. The workflow sets them automatically for GitHub Pages.

For Vercel instead, connect this directory as the repository root and set `NEXT_PUBLIC_SITE_URL` to the final public URL. Leave `GITHUB_PAGES` unset.

This site does not require a database, API server, or credentials. A FastAPI service can later power a focused interactive project demo.
