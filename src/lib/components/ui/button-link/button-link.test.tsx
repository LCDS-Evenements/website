import { expect, test } from "@playwright/experimental-ct-react";
import { ButtonLink } from ".";

test.describe("UI/Button", () => {
  test("should go to the right page when user click on the button", async({ mount, page }) => {
    const component = await mount(
      <ButtonLink href="https://cuicuitedays.fr">Button</ButtonLink>
    );

    await component.click();

    expect(page.url()).toBe("https://cuicuitedays.fr/");
  });

  test("renders children", async({ mount }) => {
    const component = await mount(
      <ButtonLink href="">Button</ButtonLink>
    );

    await expect(component).toContainText("Button");
  });
});