## 2025-10-26 - Missing Skip Link
**Learning:** The application lacked a "Skip to Content" mechanism, which is a WCAG 2.1 Level A requirement (Success Criterion 2.4.1). This forces keyboard users to tab through all navigation links before reaching the main content.
**Action:** When auditing future pages/layouts, immediately check for `app/layout.tsx` or similar root layouts to ensure a `<SkipLink />` component is present and that the main content area has a focusable ID (e.g., `<main id="main" tabIndex="-1">`).
