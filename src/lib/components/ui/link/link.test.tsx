import { expect, test } from "@playwright/experimental-ct-react";
import { CustomLink } from ".";

test.describe("UI/CustomLink", () => {
  test("should render the component", async({ mount, page }) => {
    const component = await mount(
      <CustomLink href="https://cuicuitedays.fr" text="CustomLink" />
    );

    await component.click();

    expect(page.url()).toBe("https://cuicuitedays.fr/");
  });
});