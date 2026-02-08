## 2026-02-08 - [Keyboard Accessibility for CSS Tooltips]
**Learning:** Custom CSS tooltips using `::after` and `attr(title)` are inaccessible to keyboard users unless the element is focusable (`tabIndex="0"`) and has corresponding `:focus-visible` styles.
**Action:** When implementing custom interactive elements, always ensure keyboard focus triggers the same visual feedback as hover.
