import { expect, test } from "@playwright/experimental-ct-react";
import { CustomLink } from ".";

test.describe("UI/CustomLink", () => {
  test("should go to the right page", async({ mount, page }) => {
    const component = await mount(
      <CustomLink href="https://cuicuitedays.fr" text="CustomLink" />
    );

    await component.click();

    expect(page.url()).toBe("https://cuicuitedays.fr/");
  });
});