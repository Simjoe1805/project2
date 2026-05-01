# FixNow Dispatch

A service-on-demand web app that connects users with nearby home service professionals — plumbers, electricians, HVAC technicians, locksmiths, appliance specialists, and handymen. Think Uber, but for home repairs.

**[Live Demo](https://your-live-demo-url-here)**

---

## Features

- **Onboarding flow** — Sign up, log in, or continue as a guest with a multi-step guided flow
- **Partner registration** — Tradespeople can apply to join the FixNow provider network directly in the app
- **Live interactive map** — MapLibre GL-powered map showing nearby professionals as clickable pins
- **Location detection** — Automatic geolocation to surface the closest available pros
- **AI-assisted diagnosis** — Describe the issue and get a preliminary diagnosis and cost estimate before booking
- **Booking flow** — Choose a service category, review verified pro profiles, and select a provider
- **Payment checkout** — Card, Apple Pay, and wallet support with a tip selector and cost breakdown
- **Real-time tracking** — Live ETA countdown, progress bar, route display, and status updates after booking
- **In-app chat** — Secure messaging between customer and technician (no personal numbers exposed)
- **Emergency shortcuts** — One-tap buttons for water leaks, power outages, and lockouts
- **Favorites, history & notifications** — Persistent account hub for repeat bookings and job records
- **Rating & review system** — 5-star reviews tied to completed jobs
- **Admin panel** — Separate dashboard for managing dispatches and providers

---

## Technologies Used

| Layer | Tool |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom, no framework) |
| Logic | Vanilla JavaScript (ES6+) |
| Maps | [MapLibre GL JS](https://maplibre.org/) |
| Location data | [Geoapify Places API](https://www.geoapify.com/places-api) |
| Fonts | Google Fonts — Inter |

---

## AI Tools Used

- **Claude (Anthropic)** — Used throughout development for code generation, debugging, UI logic, and iterating on the multi-step booking and tracking flows

---

## Challenges

- **Geolocation and map integration** — Wiring the browser Geolocation API to MapLibre GL and placing dynamic pro markers relative to the user's real coordinates required careful async sequencing
- **Multi-step flow state** — Managing the onboarding flow (welcome → auth → service → location → map) without a framework meant building a lightweight layer-switching system by hand
- **Simulated real-time updates** — Replicating live ETA countdown, route progress, and status transitions in a frontend-only prototype needed a manual state machine and timer logic
- **Responsive layout across breakpoints** — The map-first layout with floating overlays (search bar, dispatch card, stats, booking bar) had to remain usable on both mobile and desktop without a grid framework
- **No-backend auth simulation** — Handling login, guest, and partner flows with in-memory state while keeping the UX convincing took careful form handling and flow routing

---

## Future Improvements

- **Real backend** — Connect to a database (e.g. Supabase or Firebase) for persistent accounts, booking history, and live provider availability
- **Stripe payment integration** — Replace the simulated checkout with real payment processing
- **Push notifications** — Native browser or mobile push alerts for ETA updates and booking confirmations
- **Two-sided rating system** — Let providers rate customers after each job, not just the reverse
- **Provider mobile app** — A separate view for tradespeople to accept, navigate to, and close out jobs
- **Admin analytics dashboard** — Revenue, completion rates, and provider performance metrics
- **AI-powered matching** — Use the issue description and photo to automatically recommend the best-matched pro, not just the nearest
- **iOS and Android apps** — Wrap the experience in a native shell for App Store / Play Store distribution
