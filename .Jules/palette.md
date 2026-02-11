## 2025-05-20 - Accessible Dynamic Text

**Learning:** Dynamic text animations (like typewriter effects) can be confusing for screen readers if they announce every character change or only partial content.
**Action:** Use `aria-label` on the container with the full static text, and `aria-hidden="true"` on the animating elements to ensure screen readers announce the full message clearly.
