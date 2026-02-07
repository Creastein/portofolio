## 2024-05-23 - Accessible Typewriter Effects
**Learning:** Typewriter effects that update `textContent` dynamically are extremely disruptive to screen reader users as they announce every character update (e.g., "W", "W E", "W E B").
**Action:** Always hide the dynamic typewriter element with `aria-hidden="true"` and provide the full text content in a parent element using `aria-label` or a visually hidden span.
