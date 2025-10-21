/**
 * TypeScript Async/Await Practice
 * ================================
 *
 * Master asynchronous code for Playwright testing!
 *
 * Almost everything in Playwright is asynchronous:
 * - Clicking elements
 * - Waiting for elements
 * - Getting text content
 * - Navigation
 *
 * HOW TO WORK:
 * 1. Run the tests
 * 2. Read the requirements in each test
 * 3. Add async/await properly
 * 4. Make all tests pass!
 *
 * Learning Goals:
 * - Understanding Promises
 * - async/await syntax
 * - Error handling with try/catch
 * - Promise.all for parallel execution
 * - Sequential vs parallel operations
 *
 * Ready? Let's practice! 🚀
 */

import {test, expect} from '@playwright/test';

test.describe('TypeScript Async/Await Practice', () => {
  // ============================================================
  // Test 1: Basic Promise
  //
  // REQUIREMENTS:
  // - Create a function that returns a Promise
  // - Promise resolves with a value after delay
  // - Use setTimeout inside Promise
  // ============================================================

  test('Basic Promise', async () => {
    function delay(ms: number): Promise<string> {
      // TODO: Return a Promise that resolves after ms milliseconds
      // Use: return new Promise((resolve) => {
      //         setTimeout(() => resolve("done"), ms);
      //      });
      return new Promise(resolve => resolve(''));
    }

    const result = await delay(100);
    expect(result).toBe('done');
  });

  // ============================================================
  // Test 2: async Function
  //
  // REQUIREMENTS:
  // - Add 'async' keyword to function
  // - Function automatically returns a Promise
  // - Can use 'await' inside async function
  // ============================================================

  test('async Function', async () => {
    // TODO: Add 'async' keyword before function
    function fetchData(): Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve('test data'), 50);
      });
    }

    // TODO: Add 'async' keyword and use 'await'
    function getData() {
      // return await fetchData();
      return '';
    }

    const data = await getData();
    expect(data).toBe('test data');
  });

  // ============================================================
  // Test 3: await Keyword
  //
  // REQUIREMENTS:
  // - Use 'await' to wait for Promise to resolve
  // - Can only use 'await' inside async functions
  // - Makes async code look synchronous
  // ============================================================

  test('await Keyword', async () => {
    function simulateClick(): Promise<boolean> {
      return new Promise(resolve => {
        setTimeout(() => resolve(true), 50);
      });
    }

    // TODO: Use await to get the result
    // const clicked = await simulateClick();
    const clicked = false;

    expect(clicked).toBe(true);
  });

  // ============================================================
  // Test 4: Sequential Operations
  //
  // REQUIREMENTS:
  // - Execute async operations one after another
  // - Each operation waits for previous to complete
  // - Use await for each operation
  // ============================================================

  test('Sequential Operations', async () => {
    function step1(): Promise<number> {
      return new Promise(resolve => setTimeout(() => resolve(10), 50));
    }

    function step2(value: number): Promise<number> {
      return new Promise(resolve => setTimeout(() => resolve(value * 2), 50));
    }

    function step3(value: number): Promise<number> {
      return new Promise(resolve => setTimeout(() => resolve(value + 5), 50));
    }

    // TODO: Execute steps sequentially using await
    // const result1 = await step1();
    // const result2 = await step2(result1);
    // const result3 = await step3(result2);
    const result3 = 0;

    expect(result3).toBe(25); // (10 * 2) + 5 = 25
  });

  // ============================================================
  // Test 5: Error Handling with try/catch
  //
  // REQUIREMENTS:
  // - Use try/catch to handle Promise rejections
  // - Catch errors from async operations
  // - Return default value on error
  // ============================================================

  test('Error Handling with try/catch', async () => {
    function riskyOperation(shouldFail: boolean): Promise<string> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldFail) {
            reject(new Error('Operation failed'));
          } else {
            resolve('success');
          }
        }, 50);
      });
    }

    async function safeOperation(shouldFail: boolean): Promise<string> {
      // TODO: Wrap in try/catch
      // try {
      //     return await riskyOperation(shouldFail);
      // } catch (error) {
      //     return "error handled";
      // }
      return '';
    }

    const success = await safeOperation(false);
    const failure = await safeOperation(true);

    expect(success).toBe('success');
    expect(failure).toBe('error handled');
  });

  // ============================================================
  // Test 6: Promise.all - Parallel Execution
  //
  // REQUIREMENTS:
  // - Use Promise.all to run multiple Promises in parallel
  // - All operations execute simultaneously
  // - Wait for all to complete
  // ============================================================

  test('Promise.all - Parallel Execution', async () => {
    function fetchUser(id: number): Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve(`User ${id}`), 50);
      });
    }

    // TODO: Use Promise.all to fetch all users in parallel
    // const users = await Promise.all([
    //     fetchUser(1),
    //     fetchUser(2),
    //     fetchUser(3)
    // ]);
    const users: string[] = [];

    expect(users).toEqual(['User 1', 'User 2', 'User 3']);
    expect(users).toHaveLength(3);
  });

  // ============================================================
  // Test 7: Real-world Pattern - Click and Wait
  //
  // REQUIREMENTS:
  // - Simulate Playwright pattern: action then wait
  // - Use await for each step
  // - Return final state
  // ============================================================

  test('Click and Wait Pattern', async () => {
    function clickElement(selector: string): Promise<void> {
      return new Promise(resolve => {
        console.log(`Clicking ${selector}`);
        setTimeout(resolve, 30);
      });
    }

    function waitForElement(selector: string): Promise<boolean> {
      return new Promise(resolve => {
        setTimeout(() => resolve(true), 30);
      });
    }

    async function clickAndVerify(selector: string): Promise<boolean> {
      // TODO: Implement the pattern
      // 1. Click the element
      // 2. Wait for element to appear
      // 3. Return the result
      return false;
    }

    const result = await clickAndVerify('#submit');
    expect(result).toBe(true);
  });

  // ============================================================
  // Test 8: Getting Multiple Elements
  //
  // REQUIREMENTS:
  // - Simulate getting text from multiple elements
  // - Use Promise.all for parallel fetching
  // - Return array of texts
  // ============================================================

  test('Getting Multiple Elements', async () => {
    function getElementText(index: number): Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve(`Item ${index}`), 30);
      });
    }

    async function getAllTexts(count: number): Promise<string[]> {
      // TODO: Use Promise.all to get all texts in parallel
      // Create array of promises and await them all
      // const promises = [];
      // for (let i = 0; i < count; i++) {
      //     promises.push(getElementText(i + 1));
      // }
      // return await Promise.all(promises);
      return [];
    }

    const texts = await getAllTexts(3);
    expect(texts).toEqual(['Item 1', 'Item 2', 'Item 3']);
  });

  // ============================================================
  // Test 9: Async Function with Return Type
  //
  // REQUIREMENTS:
  // - Add proper return type annotation to async function
  // - Async functions always return Promise<T>
  // - TypeScript can infer, but explicit is better
  // ============================================================

  test('Async Function Return Types', async () => {
    // TODO: Add return type Promise<number>
    async function calculateTotal(prices: number[]) {
      await new Promise(resolve => setTimeout(resolve, 10));
      return prices.reduce((sum, price) => sum + price, 0);
    }

    // TODO: Add return type Promise<string>
    async function formatTotal(total: number) {
      await new Promise(resolve => setTimeout(resolve, 10));
      return `$${total}`;
    }

    const total = await calculateTotal([10, 20, 30]);
    const formatted = await formatTotal(total);

    expect(total).toBe(60);
    expect(formatted).toBe('$60');
  });

  // ============================================================
  // Test 10: Error with Specific Error Type
  //
  // REQUIREMENTS:
  // - Catch errors and check error type
  // - Use instanceof to check error type
  // - Extract error message
  // ============================================================

  test('Error Types', async () => {
    async function validateInput(input: string): Promise<boolean> {
      if (input === '') {
        throw new Error('Input cannot be empty');
      }
      return true;
    }

    async function processInput(input: string): Promise<string> {
      // TODO: Try to validate, catch error and return error message
      try {
        // await validateInput(input);
        // return "valid";
      } catch (error) {
        // if (error instanceof Error) {
        //     return error.message;
        // }
        // return "unknown error";
      }
      return '';
    }

    const valid = await processInput('test');
    const invalid = await processInput('');

    expect(valid).toBe('valid');
    expect(invalid).toBe('Input cannot be empty');
  });

  // ============================================================
  // Test 11: Timeout Pattern
  //
  // REQUIREMENTS:
  // - Create a timeout helper function
  // - Use Promise race between operation and timeout
  // - Throw error if timeout occurs
  // ============================================================

  test('Timeout Pattern', async () => {
    function delay(ms: number): Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve('completed'), ms);
      });
    }

    function timeout(ms: number): Promise<never> {
      return new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), ms);
      });
    }

    async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
      // TODO: Use Promise.race to race between promise and timeout
      // return Promise.race([promise, timeout(ms)]);
      return promise;
    }

    // Should complete before timeout
    const fast = await withTimeout(delay(50), 200);
    expect(fast).toBe('completed');

    // Should timeout
    try {
      await withTimeout(delay(200), 50);
      expect(true).toBe(false); // Should not reach here
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe('Timeout');
    }
  });

  // ============================================================
  // Test 12: Chaining Async Operations
  //
  // REQUIREMENTS:
  // - Chain multiple async operations
  // - Each step uses result from previous step
  // - Clean, readable code with await
  // ============================================================

  test('Chaining Async Operations', async () => {
    interface User {
      id: number;
      name: string;
    }

    interface UserDetails {
      user: User;
      age: number;
      city: string;
    }

    async function fetchUser(id: number): Promise<User> {
      await new Promise(resolve => setTimeout(resolve, 20));
      return {id, name: `User ${id}`};
    }

    async function fetchUserDetails(user: User): Promise<UserDetails> {
      await new Promise(resolve => setTimeout(resolve, 20));
      return {user, age: 30, city: 'Berlin'};
    }

    async function formatUserInfo(details: UserDetails): Promise<string> {
      await new Promise(resolve => setTimeout(resolve, 20));
      return `${details.user.name}, ${details.age}, ${details.city}`;
    }

    async function getUserInfo(id: number): Promise<string> {
      // TODO: Chain all three operations
      // const user = await fetchUser(id);
      // const details = await fetchUserDetails(user);
      // const info = await formatUserInfo(details);
      // return info;
      return '';
    }

    const info = await getUserInfo(1);
    expect(info).toBe('User 1, 30, Berlin');
  });

  // ============================================================
  // FINAL Test: Complete Async Test Flow
  //
  // Combine everything: parallel execution, error handling, chaining
  // ============================================================

  test('FINAL: Complete Async Test Flow', async () => {
    interface TestStep {
      name: string;
      duration: number;
      shouldFail: boolean;
    }

    async function executeStep(step: TestStep): Promise<string> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (step.shouldFail) {
            reject(new Error(`${step.name} failed`));
          } else {
            resolve(`${step.name} completed`);
          }
        }, step.duration);
      });
    }

    async function runTestSuite(steps: TestStep[]): Promise<{
      passed: string[];
      failed: string[];
      total: number;
    }> {
      const passed: string[] = [];
      const failed: string[] = [];

      // TODO: Execute all steps in parallel using Promise.allSettled
      // This allows some to fail without stopping others
      // const results = await Promise.allSettled(
      //     steps.map(step => executeStep(step))
      // );

      // TODO: Process results
      // results.forEach((result, index) => {
      //     if (result.status === "fulfilled") {
      //         passed.push(steps[index].name);
      //     } else {
      //         failed.push(steps[index].name);
      //     }
      // });

      return {
        passed,
        failed,
        total: steps.length,
      };
    }

    const steps: TestStep[] = [
      {name: 'Login', duration: 50, shouldFail: false},
      {name: 'Navigate', duration: 30, shouldFail: false},
      {name: 'Submit', duration: 40, shouldFail: true},
      {name: 'Verify', duration: 20, shouldFail: false},
    ];

    const results = await runTestSuite(steps);

    expect(results.total).toBe(4);
    expect(results.passed).toEqual(['Login', 'Navigate', 'Verify']);
    expect(results.failed).toEqual(['Submit']);
  });
});

// ============================================================
// 🎊 When all tests pass, you've mastered async/await! 🎊
// ============================================================
