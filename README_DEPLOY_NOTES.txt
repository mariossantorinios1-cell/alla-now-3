Deployment notes - required manual steps before deploy:
1) Add env vars listed in README.md to Vercel project settings.
2) Add your AdSense script to _app.js or insert into AdsPlaceholder component.
3) Provide Firebase config values in env vars.
4) For live streaming, integrate a streaming provider or implement WebRTC.
5) Test Stripe in test mode and replace with real keys for production.
