import { test, expect } from "@playwright/test";
import { billetterieLink } from "@/config/billetterie.config";

//TODO: Check the code

test.describe("ButtonLink", ()  => {
  test("button link in the navbar should go to the shop", async({ page, context }) => {
    await page.goto("/");

    const billetterieButton = page.getByTestId("billetterie-button-1");

    await billetterieButton.click();

    const pagePromise = context.waitForEvent("page");
    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    expect(newPage.url()).toBe(billetterieLink);
  });

  test("button link in the home section should go to the shop", async({ page, context }) => {
    await page.goto("/");

    const billetterieButton = page.getByTestId("billetterie-button-2");

    await billetterieButton.click();

    const pagePromise = context.waitForEvent("page");
    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    expect(newPage.url()).toBe(billetterieLink);
  });

  test("button link in the footer should go to the shop", async({ page, context }) => {
    await page.goto("/");

    const billetterieButton = page.getByTestId("billetterie-button-3");

    await billetterieButton.click();

    const pagePromise = context.waitForEvent("page");
    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    expect(newPage.url()).toBe(billetterieLink);
  });
});