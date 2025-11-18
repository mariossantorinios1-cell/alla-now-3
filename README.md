# AllNow - Local Auth ZIP (No external services)

This version uses **local browser storage** for authentication, profiles, chat, tracking and simple uploads.
It requires **no Supabase or Firebase keys** — drop it on Vercel and deploy immediately.

## Features included
- Local Auth (register/login stored in localStorage)
- Profiles (stored in localStorage)
- Real-time-ish Chat (in-memory + localStorage, updates on send)
- Video feed + upload (uses object URLs, stored in localStorage index)
- Gaming discovery page
- Donations button (placeholder, Stripe-ready UI)
- Notifications component (placeholder)
- Music player (simple client-side player)
- Ads placeholders and local tracking for clicks/views
- Tailwind CSS, Next.js 14 app-router
- All pages tested for no conflicts (no pages/ folder)

## How to run locally
1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000

## Notes
- This is for fast deployment and testing. For production, migrate auth/storage to Supabase or Firebase.
- If Vercel build shows issues, send build logs and I'll patch immediately.
