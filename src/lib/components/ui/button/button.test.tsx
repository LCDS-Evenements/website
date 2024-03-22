/* eslint-disable max-len */
import { expect, test } from "@playwright/experimental-ct-react";
import { Button } from ".";

test.describe("UI/Button", () => {
  test("update variable on click", async({ mount }) => {
    let clicked = false;
    const component = await mount(
      <Button onClick={() => clicked = true}>Button</Button>
    );

    await component.click();

    expect(clicked).toBeTruthy();
  });

  test("renders children", async({ mount }) => {
    const component = await mount(
      <Button>Button</Button>
    );

    await expect(component).toContainText("Button");
  });

  test("should render button with custom class", async({ mount }) => {
    const component = await mount(
      <Button className="custom-class">Button</Button>
    );

    await expect(component).toHaveClass("rounded-[50px] text-center transition-all duration-300 cursor-pointer font-magicRetro bg-yellow-500 text-blue-950 px-5 py-2 text-md md:text-xl custom-class");
  });
});