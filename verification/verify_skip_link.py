from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the page
        try:
            page.goto("http://localhost:3000")

            # Wait for the body to be visible to ensure load
            page.wait_for_selector("body")

            # Press Tab to focus the skip link
            page.keyboard.press("Tab")

            # The skip link should be the first focused element
            skip_link = page.locator("a[href='#main-content']")
            expect(skip_link).to_be_focused()
            expect(skip_link).to_be_visible()

            # Take a screenshot
            page.screenshot(path="verification/skip_link.png")
            print("Screenshot taken at verification/skip_link.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
