# AllNow - Next.js starter (scaffold)

This repository is a scaffold for the **AllNow** platform (Next.js + Tailwind + Firebase placeholders).

## What is included
- Next.js app structure (pages router)
- Tailwind CSS setup
- Firebase placeholders for Auth / Firestore / Realtime (chat)
- Pages: Home, Profile, Video, Live, Gaming
- Components: Header, Footer, Player, ChatBox
- Placeholders for Google AdSense / Analytics and Stripe (donations)
- README with deployment notes and env vars to set

## Important: Environment variables to set (Vercel)
Create these environment variables before deploying:
- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- NEXT_PUBLIC_FIREBASE_APP_ID
- NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
- NEXT_PUBLIC_ADSENSE_CLIENT (your AdSense client id)
- STRIPE_SECRET_KEY (for server-side if you integrate Stripe)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

## How to run locally
1. Install dependencies: `npm install`
2. Create a `.env.local` with the environment variables above.
3. Run dev server: `npm run dev`

## Deployment to Vercel
1. Create a new Vercel project from this repo.
2. Add the environment variables in the Vercel dashboard.
3. Deploy — the project is configured to run on Vercel.

---
This scaffold contains placeholders (no secret keys included). Replace the placeholders with your actual keys and test payments/ads in sandbox before going live.
