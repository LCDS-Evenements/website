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

    await expect(component).toHaveClass("custom-class");
  });
});