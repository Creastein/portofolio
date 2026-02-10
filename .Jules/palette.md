## 2025-05-22 - Skip Link & Focus Management
**Learning:** For SPAs with `fixed` headers, ensure the target element (like `#home`) has `tabIndex={-1}` and `outline-none` so it can programmatically receive focus and the screen reader announces the correct context, while avoiding a visible focus outline on the container itself (unless desired). The skip link itself should be visibly focused (e.g., `focus:translate-y-0`).
**Action:** When implementing skip links, always verify focus movement and screen reader announcements. Use `tabIndex={-1}` on non-interactive target containers.
