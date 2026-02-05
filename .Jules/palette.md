## 2025-02-18 - Sticky Navbar Z-Index Conflict
**Learning:** The application uses a sticky navbar with `z-index: 1000`. Standard skip-links might be obscured if they don't have a higher z-index.
**Action:** When adding overlay elements (modals, skip links, toasts), ensure z-index > 1000 (e.g., 10001) and verify visual layering against the navbar.
