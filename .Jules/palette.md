## 2026-02-09 - Accessible Typewriter Effects
**Learning:** Dynamic text animations like typewriter effects can be confusing or silent for screen reader users if implemented by manipulating `textContent`.
**Action:** Always provide a static `aria-label` with the full text on the parent container and hide the animating elements with `aria-hidden="true"`.
