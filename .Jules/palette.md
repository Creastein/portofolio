## 2024-10-24 - Loading Screens & Automated Testing
**Learning:** This application utilizes a mandatory full-screen `LoadingScreen` overlay (approx. 2.5s duration) that intercepts all interactions on initial load.
**Action:** Any automated tests (Playwright/Selenium) or accessibility audits *must* include an explicit wait for the `.loading-screen` to detach or gain the `.hidden`/`.fade-out` class before attempting any interaction, otherwise checks will fail or interact with the invisible loader.
