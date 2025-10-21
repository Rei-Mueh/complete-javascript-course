/**
 * TypeScript Arrays Practice
 * ===========================
 *
 * Master array operations for Playwright testing!
 *
 * Arrays are everywhere in test automation:
 * - Getting multiple elements
 * - Filtering test data
 * - Validating lists
 * - Processing test results
 *
 * HOW TO WORK:
 * 1. Run the tests
 * 2. Read the requirements in each test
 * 3. Fix the TypeScript errors and implement the logic
 * 4. Make all tests pass!
 *
 * Learning Goals:
 * - Array type annotations
 * - Array methods (map, filter, find, etc.)
 * - Working with array elements
 * - Array iteration
 * - Combining arrays
 *
 * Ready? Let's practice! 🚀
 */

import {test, expect} from '@playwright/test';

test.describe('TypeScript Arrays Practice', () => {
  // ============================================================
  // Test 3: Accessing Array Elements
  //
  // REQUIREMENTS:
  // - Access array elements by index
  // - Get first and last elements
  // - Handle arrays with proper types
  // ============================================================

  test('Accessing Array Elements', () => {
    const fruits: string[] = ['apple', 'banana', 'cherry', 'date'];

    // TODO: Get the first element
    const first = fruits[0];

    // TODO: Get the last element
    const last = fruits[fruits.length - 1];

    // TODO: Get the element at index 2
    const third = fruits[2];
    const fourth = fruits[10] ?? 'defaultFruit'; // wird undefined weil nicht vorhanden und bekommt dann den default Wert (??) defaultFruit zugewiesen.

    expect(first).toBe('apple');
    expect(last).toBe('date');
    expect(third).toBe('cherry');
    expect(fourth).toBe('defaultFruit');
  });

  // ============================================================
  // Test 4: Array Length and Checking Elements
  //
  // REQUIREMENTS:
  // - Use .length property
  // - Use .includes() method to check if element exists
  // - Add proper types
  // ============================================================

  test('Array Length and Checking Elements', () => {
    const testResults: string[] = ['passed', 'failed', 'passed', 'skipped'];

    // TODO: Get the count of test results
    const count = testResults.length;

    // TODO: Check if array includes "failed"
    const hasFailed = testResults.includes('failed');

    // TODO: Check if array includes "pending"
    const hasPending = testResults.includes('pending');

    expect(count).toBe(4);
    expect(hasFailed).toBe(true);
    expect(hasPending).toBe(false);
  });

  // ============================================================
  // Test 5: Adding and Removing Elements
  //
  // REQUIREMENTS:
  // - Use .push() to add to end
  // - Use .pop() to remove from end
  // - Use .unshift() to add to beginning
  // - Use .shift() to remove from beginning
  // ============================================================

  test('Adding and Removing Elements', () => {
    const queue: string[] = ['test1', 'test2'];

    // TODO: Add "test3" to the end
    // Use: queue.push("test3");

    expect(queue).toEqual(['test1', 'test2', 'test3']);

    // TODO: Remove the last element
    // Use: const removed = queue.pop();
    const removed = '';

    expect(removed).toBe('test3');
    expect(queue).toEqual(['test1', 'test2']);

    // TODO: Add "test0" to the beginning
    // Use: queue.unshift("test0");

    expect(queue).toEqual(['test0', 'test1', 'test2']);

    // TODO: Remove the first element
    // Use: const first = queue.shift();
    const first = '';

    expect(first).toBe('test0');
    expect(queue).toEqual(['test1', 'test2']);
  });

  // ============================================================
  // Test 6: Finding Elements
  //
  // REQUIREMENTS:
  // - Use .find() to get first matching element
  // - Handle undefined return values properly
  // ============================================================

  test('Finding Elements', () => {
    interface Product {
      id: number;
      name: string;
      price: number;
      inStock: boolean;
    }

    const products: Product[] = [
      {id: 1, name: 'Laptop', price: 999, inStock: true},
      {id: 2, name: 'Mouse', price: 29, inStock: false},
      {id: 3, name: 'Keyboard', price: 79, inStock: true},
    ];

    // TODO: Find the product with id 2
    // const mouse = products.find((product) => { // für alle product in products
    //   if (product.id === 2) {
    //     return product;
    //   } else {
    //     return undefined;
    //   }
    // };
    const mouse = products.find(product => product.id === 2);

    // TODO: Find the first product that is in stock
    // const firstInStock = products.find(product => product.inStock && product.price < 900);
    const firstInStock = products.find(product => product.inStock);

    expect(mouse?.name).toBe('Mouse');
    expect(firstInStock?.name).toBe('Laptop');
  });

  // ============================================================
  // Test 7: Filtering Arrays
  //
  // REQUIREMENTS:
  // - Use .filter() to create new array with matching elements
  // - Filter returns a new array, original stays unchanged
  // - Add proper return type annotations
  // ============================================================

  test('Filtering Arrays', () => {
    interface TestCase {
      name: string;
      status: 'passed' | 'failed' | 'skipped';
      duration: number;
    }

    const testCases: TestCase[] = [
      {name: 'Login', status: 'passed', duration: 1500},
      {name: 'Checkout', status: 'failed', duration: 3000},
      {name: 'Search', status: 'passed', duration: 1000},
      {name: 'Logout', status: 'skipped', duration: 0},
    ];

    // TODO: Get all passed tests
    const passedTests: TestCase[] = testCases.filter(testCase => testCase.status === 'passed');

    // TODO: Get all tests that took longer than 1500ms
    const slowTests: TestCase[] = testCases.filter(testCase => testCase.duration > 1500);

    // TODO: Get all tests that are not skipped
    const executedTests: TestCase[] = testCases.filter(testCase => testCase.status !== 'skipped');

    expect(passedTests).toHaveLength(2);
    expect(slowTests).toHaveLength(1);
    expect(slowTests[0].name).toBe('Checkout');
    expect(executedTests).toHaveLength(3);
  });

  // ============================================================
  // Test 8: Mapping Arrays
  //
  // REQUIREMENTS:
  // - Use .map() to transform each element
  // - Map creates a new array with transformed values
  // - Add proper type annotations for the result
  // ============================================================

  test('Mapping Arrays', () => {
    const prices: number[] = [10, 20, 30, 40];

    // TODO: Add 10% tax to each price
    const pricesWithTax: number[] = prices.map((price) => price * 1.1);

    // TODO: Convert prices to strings with $ prefix using template strings
    const formattedPrices: string[] = prices.map((price) => `€${price}`);

    expect(pricesWithTax[0]).toBeCloseTo(11);
    expect(pricesWithTax[1]).toBeCloseTo(22);
    expect(formattedPrices).toEqual(['€10', '€20', '€30', '€40']);
  });

  // ============================================================
  // Test 9: Getting Text from Elements (Common Pattern)
  //
  // REQUIREMENTS:
  // - Simulate getting text from page elements
  // - Extract specific properties from objects
  // - Use .map() for transformation
  // ============================================================

  test('Getting Text from Elements', () => {
    // Simulating page elements with text content
    interface Element {
      text: string;
      isVisible: boolean;
    }

    const elements: Element[] = [
      {text: 'Product A', isVisible: true},
      {text: 'Product B', isVisible: true},
      {text: 'Product C', isVisible: false},
      {text: 'Product D', isVisible: true},
    ];

    // TODO: Get text from all visible elements
    // 1. Filter visible elements
    // 2. Map to text
    const visibleTexts: string[] = elements.filter(element => element.isVisible).map(element => element.text);

    expect(visibleTexts).toEqual(['Product A', 'Product B', 'Product D']);
    expect(visibleTexts).toHaveLength(3);
  });

  // ============================================================
  // Test 10: Checking Conditions with .every() and .some()
  //
  // REQUIREMENTS:
  // - Use .every() to check if ALL elements match condition
  // - Use .some() to check if ANY element matches condition
  // - Both return boolean values
  // ============================================================

  test('Checking Conditions', () => {
    const scores: number[] = [85, 92, 78, 95, 88];

    // TODO: Check if all scores are above 70
    const allPassed = scores.every(score => score > 70);

    // TODO: Check if any score is above 90
    const hasExcellent = scores.some(score => score > 90);

    // TODO: Check if any score is below 60
    const hasFailed = scores.some(score => score < 60);

    expect(allPassed).toBe(true);
    expect(hasExcellent).toBe(true);
    expect(hasFailed).toBe(false);
  });

  // ============================================================
  // Test 12: Combining Arrays
  //
  // REQUIREMENTS:
  // - Use spread operator (...) to combine arrays
  // - Use .concat() to merge arrays
  // - Both create new arrays
  // ============================================================

  test('Combining Arrays', () => {
    const smokeTests: string[] = ['login', 'logout'];
    const regressionTests: string[] = ['checkout', 'search', 'profile'];

    // TODO: Combine using spread operator
    const allTests: string[] = [...smokeTests, ...regressionTests];

    // TODO: Combine using concat
    const combined: string[] = smokeTests.concat(regressionTests);

    expect(allTests).toEqual(['login', 'logout', 'checkout', 'search', 'profile']);
    expect(combined).toEqual(['login', 'logout', 'checkout', 'search', 'profile']);
    expect(allTests).toHaveLength(5);
  });

  // ============================================================
  // Test 13: Sorting Arrays
  //
  // REQUIREMENTS:
  // - Use .sort() to order elements
  // - Sort modifies the original array
  // - Use compare function for numbers
  // ============================================================

  test('Sorting Arrays', () => {
    const unsortedNumbers: number[] = [5, 2, 8, 1, 9];
    const names: string[] = ['Charlie', 'Alice', 'Bob'];

    // TODO: Sort numbers in ascending order
    // you need the [...] so that a new array is created!!!!
    const sortedNumbers = [...unsortedNumbers.sort()]; // aufsteigend
    const descSortedNumbers = [...unsortedNumbers.sort((a, b) => b - a)]; // absteigende Sortierung

    // TODO: Sort names alphabetically
    const sortedNames = names.sort();

    expect(sortedNumbers).toEqual([1, 2, 5, 8, 9]);
    expect(descSortedNumbers).toEqual([9, 8, 5, 2, 1]);
    expect(sortedNames).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  // ============================================================
  // Test 14: Removing Duplicates
  //
  // REQUIREMENTS:
  // - Use Set to remove duplicates
  // - Convert back to array using Array.from() or spread
  // ============================================================

  test('Removing Duplicates', () => {
    const tagsWithDuplicates: string[] = ['smoke', 'critical', 'smoke', 'regression', 'critical'];

    // TODO: Remove duplicates using Set
    // Use: Array.from(new Set(tagsWithDuplicates))
    // Or: [...new Set(tagsWithDuplicates)]
    const uniqueTags: string[] = [];

    expect(uniqueTags).toEqual(['smoke', 'critical', 'regression']);
    expect(uniqueTags).toHaveLength(3);
  });

  // ============================================================
  // Test 15: Array Slicing
  //
  // REQUIREMENTS:
  // - Use .slice() to get portion of array
  // - Slice doesn't modify original array
  // - Negative indices count from end
  // ============================================================

  test('Array Slicing', () => {
    const testQueue: string[] = ['test1', 'test2', 'test3', 'test4', 'test5'];

    // TODO: Get first 3 tests
    // Use: testQueue.slice(0, 3)
    const firstThree: string[] = [];

    // TODO: Get last 2 tests
    // Use: testQueue.slice(-2)
    const lastTwo: string[] = [];

    // TODO: Get middle tests (index 1 to 3)
    // Use: testQueue.slice(1, 4)
    const middle: string[] = [];

    expect(firstThree).toEqual(['test1', 'test2', 'test3']);
    expect(lastTwo).toEqual(['test4', 'test5']);
    expect(middle).toEqual(['test2', 'test3', 'test4']);
  });

  // ============================================================
  // FINAL Test: Real-World Scenario
  //
  // Apply everything you've learned to process test results!
  // ============================================================

  test('FINAL: Processing Test Results', () => {
    interface TestResult {
      id: number;
      name: string;
      status: 'passed' | 'failed' | 'skipped';
      duration: number;
      tags: string[];
    }

    const results: TestResult[] = [
      {id: 1, name: 'Login Test', status: 'passed', duration: 1500, tags: ['smoke', 'auth']},
      {id: 2, name: 'Checkout Test', status: 'failed', duration: 3000, tags: ['critical', 'payment']},
      {id: 3, name: 'Search Test', status: 'passed', duration: 1000, tags: ['smoke']},
      {id: 4, name: 'Profile Test', status: 'skipped', duration: 0, tags: ['profile']},
      {id: 5, name: 'Cart Test', status: 'passed', duration: 2000, tags: ['critical']},
    ];

    // TODO: Get all failed test names
    const failedTests: string[] = [];
    // Use: results.filter(r => r.status === "failed").map(r => r.name)

    // TODO: Calculate total duration of passed tests
    const passedDuration = 0;
    // Use: results.filter(r => r.status === "passed")
    //             .reduce((sum, r) => sum + r.duration, 0)

    // TODO: Get all unique tags from all tests
    const allTags: string[] = [];
    // 1. Get all tags: results.map(r => r.tags).flat()
    // 2. Remove duplicates: [...new Set(allTags)]

    // TODO: Check if any critical test failed
    const criticalFailed = false;
    // Use: results.some(r => r.tags.includes("critical") && r.status === "failed")

    // TODO: Get the slowest test name
    const slowestTest = '';
    // 1. Sort by duration: [...results].sort((a, b) => b.duration - a.duration)
    // 2. Get first: [0].name

    expect(failedTests).toEqual(['Checkout Test']);
    expect(passedDuration).toBe(4500);
    expect(allTags).toEqual(['smoke', 'auth', 'critical', 'payment', 'profile']);
    expect(criticalFailed).toBe(true);
    expect(slowestTest).toBe('Checkout Test');
  });
});

// ============================================================
// 🎊 When all tests pass, you're an array master! 🎊
// ============================================================
