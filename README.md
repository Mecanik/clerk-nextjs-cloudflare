1. Installed cloudflare-next-on-pages: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-nextjs-site/#create-a-new-project-using-the-create-cloudflare-cli-c3
2. Installed Clerk: https://clerk.com/docs/quickstarts/nextjs
3. Added user print to app\page.tsx


Run:

npx @cloudflare/next-on-pages && npx wrangler pages dev .vercel/output/static --compatibility-flag=nodejs_compat --compatibility-date=2024-02-17

