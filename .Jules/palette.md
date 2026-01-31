## 2025-05-15 - Skip Link Focus Management
**Learning:** Simply linking to an ID (`#main`) is not enough for all browsers to shift keyboard focus to the target container. Adding `tabIndex={-1}` to the target element (e.g., `<main>`) ensures that the element itself receives focus, allowing the user to tab immediately to the first interactive element inside it.
**Action:** Always add `tabIndex={-1}` to the target container of a "Skip to Content" link.
