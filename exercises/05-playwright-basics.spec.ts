// Exercise 2: Playwright Basics
// Complete these exercises to practice Playwright fundamentals

import {test, expect} from '@playwright/test';

// Exercise 2.1: Basic Navigation and Assertions
test.describe('Exercise 2.1: Navigation', () => {
  test('navigate and verify page', async ({page}) => {
    // TODO: Navigate to https://playwright.dev
    // TODO: Assert the page title contains "Playwright"
    // TODO: Assert the URL is correct
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/); // Regex /Playwright/, new RegExp('Playwright', i)
    await expect(page).toHaveURL('https://playwright.dev');
  });
});

// Exercise 2.2: Finding Elements
test.describe('Exercise 2.2: Locators', () => {
  test('find elements using different strategies', async ({page}) => {
    await page.goto('https://playwright.dev');
    // TODO: Find the "Get started" link using getByRole
    const linkGetStarted = page.getByRole('link', {name: 'Get Started'});
    await expect(linkGetStarted).toBeVisible();
    // TODO: Find the search button using getByLabel or getByRole
    const buttonSearchButton = page.getByRole('button', {name: 'Search (Ctrl+K)'});
    await expect(buttonSearchButton).toBeVisible();
    page.getByLabel(/Search/);
    // TODO: Find an element by text
    page.getByText(/Cross-browser. Playwright/);
    // TODO: Verify the element is visible
    await expect(page.getByText(/Cross-browser. Playwright/)).toBeVisible();
  });
});

// Exercise 2.3: Form Interaction
test.describe('Exercise 2.3: Form Handling', () => {
  test('login should work', async ({page}) => {
    // Now we switch to a little more complex page: https://www.saucedemo.com/
    // TODO: Navigate to the page
    await page.goto('https://www.saucedemo.com/');
    // TODO: Fill in the username field with "standard_user"
    const fieldUsername = page.locator('[data-test="username"]');
    await fieldUsername.fill('standard_user');
    // TODO: Fill in the password field with "secret_sauce"
    const fieldPassword = page.locator('[data-test="password"]');
    await fieldPassword.fill('secret_sauce');
    // TODO: Click the login button
    const buttonLogin = page.locator('[data-test="login-button"]');
    await buttonLogin.click();
    // TODO: Assert successful login (URL changes or element appears)
    const textHeader = page.getByText('Swag Labs');
    await expect(textHeader).toBeVisible();
  });
});

// Exercise 2.4: Waiting Strategies
test.describe('Exercise 2.4: Waiting', () => {
  test('wait for elements and conditions', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="login-button"]').isVisible();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    // TODO: Wait for URL to change to inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    // TODO: Wait for products to load (find product container)
    await page.locator('[data-test="inventory-container"]').isVisible();
  });
});

// Exercise 2.5: Multiple Elements
test.describe('Exercise 2.5: Collections', () => {
  test('work with multiple elements', async ({page}) => {
    // TODO: Login
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="login-button"]').isVisible();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    const expectedItemNames = [
      'Sauce Labs Backpack',
      'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Onesie',
      'Sauce Labs Bike Light',
      'Sauce Labs Fleece Jacket',
      'Test.allTheThings() T-Shirt (Red)',
    ];
    // TODO: Get all product items
    const productItems = page.locator('[data-test="inventory-item"]');
    // TODO: Count the number of products
    await expect(productItems).toHaveCount(6);
    // TODO: Get all product names (text content)
    const locatorProductNames = productItems.locator('[data-test="inventory-item-name"]');
    // TODO: Assert there are 6 products
    const productNames: string[] = await locatorProductNames.allTextContents();
    expect(productNames.length).toBe(6);
    for (const name of expectedItemNames) {
      expect(productNames).toContain(name);
    }
    // TODO: Click "Add to cart" for the first product
    await productItems.nth(0).locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });
});

// Exercise 2.6: Assertions
test.describe('Exercise 2.6: Assertions', () => {
  test('various assertion types', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    // TODO: Assert login button is enabled
    // await page.locator('[data-test="login-button"]').isVisible();
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
    // await page.locator('[data-test="login-button"]').click();
    // TODO: Assert username field is empty
    await expect(page.locator('[data-test="username"]')).toBeEmpty();
    // TODO: Fill username and assert it has the value
    const fieldUserName = page.locator('[data-test="username"]');
    await fieldUserName.fill('standard_user');
    await expect(fieldUserName).toHaveValue('standard_user');
    // TODO: Assert error message is not visible initially
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeHidden();
    // TODO: Try invalid login and assert error message appears
    await page.locator('[data-test="login-button"]').click();
    await expect(errorMessage).toBeVisible();
  });
});

// Exercise 2.9: Working with Dropdowns
test.describe('Exercise 2.9: Dropdowns', () => {
  test('select dropdown options', async ({page}) => {
    // TODO Login
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
    await page.locator('[data-test="login-button"]').click();
    // TODO: Find the sort dropdown
    const ddlbSortBy = page.locator('[data-test="product-sort-container"]');
    // TODO: Select "Price (low to high)" option
    await ddlbSortBy.click();
    await ddlbSortBy.selectOption({value: 'lohi'});
    // TODO: Assert the selected value
    // eslint-disable-next-line playwright/prefer-web-first-assertions
    expect(page.locator('[data-test="active-option"]').innerText()).toBe('Price (low to high)');
    // ddlbSortBy.selectText ===
    // TODO: Get all available options
    // TODO: See if the price Order is correct.
  });
});

// Exercise 2.10: Test Hooks
test.describe('Exercise 2.10: Hooks', () => {
  // TODO: Add beforeEach hook to navigate to the page

  // TODO: Add afterEach hook to take screenshot on failure

  test('with hooks', async ({page}) => {
    // Your test should already be on the page due to beforeEach
    // TODO: Verify you're on the correct page
  });

  test('another test with hooks', async ({page}) => {
    // This should also start on the page
    // TODO: Perform a different verification
  });
});
