/* eslint-disable max-len */
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

  //TODO: Debug this cause is not working

  test("should render button with custom class", async({ mount }) => {
    const component = await mount(
      <ButtonLink href="https://cuicuitedays.fr" className="custom-class">ButtonLink</ButtonLink>
    );

    await expect(component).toHaveClass("rounded-[50px] text-center transition-all duration-300 cursor-pointer font-magicRetro bg-yellow-500 text-blue-950 px-5 py-2 text-md md:text-xl custom-class");
  });
});