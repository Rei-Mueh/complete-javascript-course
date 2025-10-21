// Exercise 3: Page Object Model
// Create and use Page Objects for better test organization

import {test, expect, Page, Locator} from '@playwright/test';

// Exercise 3.1: Create a Login Page Object
// TODO: Complete the LoginPage class
class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    // TODO: Initialize locators
  }

  async goto() {
    // TODO: Navigate to login page
  }

  async login(username: string, password: string) {
    // TODO: Implement login method
  }

  async getErrorMessage(): Promise<string | null> {
    // TODO: Get error message text
    return null;
  }

  async isErrorVisible(): Promise<boolean> {
    // TODO: Check if error is visible
    return false;
  }
}

// Exercise 3.2: Create an Inventory Page Object
// TODO: Create InventoryPage class
class InventoryPage {
  readonly page: Page;
  // TODO: Add locator properties

  constructor(page: Page) {
    this.page = page;
    // TODO: Initialize locators
  }

  async getProductCount(): Promise<number> {
    // TODO: Return number of products
    return 0;
  }

  async addProductToCart(productName: string) {
    // TODO: Add specific product to cart
  }

  async getCartItemCount(): Promise<string> {
    // TODO: Get the number shown on cart badge
    return '0';
  }

  async sortProducts(option: string) {
    // TODO: Sort products by given option
  }

  async getProductPrices(): Promise<string[]> {
    // TODO: Get all product prices
    return [];
  }
}

// Exercise 3.3: Create a Cart Page Object
// TODO: Create CartPage class
class CartPage {
  // Your implementation here
}

// Exercise 3.6: Test using Page Objects
test.describe('Tests using Page Objects', () => {
  test('successful login using POM', async ({page}) => {
    // TODO: Use page object to login
    // TODO: Assert successful login
  });

  test('failed login shows error', async ({page}) => {
    // TODO: Test invalid login
    // TODO: Assert error message is displayed
  });

  test('add products to cart', async ({page}) => {
    // TODO: Login first
    // TODO: Add products to cart
    // TODO: Verify cart count
  });

  test('sort products by price', async ({page}) => {
    // TODO: Login and navigate to inventory
    // TODO: Sort products
    // TODO: Verify products are sorted correctly
  });
});
