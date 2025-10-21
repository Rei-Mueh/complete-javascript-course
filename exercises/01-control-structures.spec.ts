/**
 * TypeScript Control Structures Practice
 * =======================================
 *
 * Master control flow for test automation!
 *
 * Control structures are essential for:
 * - Conditional test logic
 * - Iterating through test data
 * - Handling different test scenarios
 * - Making decisions in tests
 *
 * HOW TO WORK:
 * 1. Run the tests
 * 2. Read the requirements in each test
 * 3. Implement the logic using control structures
 * 4. Make all tests pass!
 *
 * Learning Goals:
 * - if/else statements
 * - Truthy/falsy values
 * - for loops (index-based)
 * - for...of loops
 * - while loops
 * - switch statements
 * - Ternary operator
 * - Logical operators (&&, ||, !)
 *
 * Ready? Let's practice! 🚀
 */

import {test, expect} from '@playwright/test';

test.describe('TypeScript Control Structures', () => {
  // ============================================================
  // Test 1: Basic if/else
  //
  // REQUIREMENTS:
  // - Use if/else to check conditions
  // - Return different values based on status
  // ============================================================

  test('Basic if/else', () => {
    function getTestStatus(passed: boolean): string {
      // TODO: If passed is true, return "Test Passed"
      // Otherwise, return "Test Failed"
      if (passed) {
        return 'Test Passed';
      } 
      return 'Test Failed';
    }
    // return passed ? "Test Passed" : "Test Failed"
    expect(getTestStatus(true)).toBe('Test Passed');
    expect(getTestStatus(false)).toBe('Test Failed');
  });

  // ============================================================
  // Test 2: if/else if/else Chain
  //
  // REQUIREMENTS:
  // - Use if/else if/else for multiple conditions
  // - Check status in order: passed, failed, skipped
  // ============================================================

  test('if/else if/else Chain', () => {
    type TestStatus = 'passed' | 'failed' | 'skipped';

    function getStatusMessage(status: TestStatus): string {
      // TODO: Implement the logic
      // If status is "passed" -> return "✓ Success"
      // If status is "failed" -> return "✗ Failed"
      // If status is "skipped" -> return "○ Skipped"
      if( status === 'passed') {
        return "✓ Success"
      } else if (status === "failed") {
        return "✗ Failed"
      } else if (status === "skipped") {
        return "○ Skipped"
      }
      return '';
    }

    expect(getStatusMessage('passed')).toBe('✓ Success');
    expect(getStatusMessage('failed')).toBe('✗ Failed');
    expect(getStatusMessage('skipped')).toBe('○ Skipped');
  });

  // ============================================================
  // Test 3: Truthy and Falsy Values
  //
  // REQUIREMENTS:
  // - Check if values are truthy or falsy
  // - Empty string, 0, null, undefined are falsy
  // - Non-empty strings, numbers (except 0) are truthy
  // ============================================================

  test('Truthy and Falsy Values', () => {
    function hasValue(value: string | number | null | undefined): boolean {
      // TODO: Return true if value is truthy, false if falsy
      return value ? true : false;
    }

    expect(hasValue('test')).toBe(true);
    expect(hasValue('')).toBe(false);
    expect(hasValue(0)).toBe(false);
    expect(hasValue(42)).toBe(true);
    expect(hasValue(null)).toBe(false);
    expect(hasValue(undefined)).toBe(false);
  });

  // ============================================================
  // Test 4: Checking Empty Strings
  //
  // REQUIREMENTS:
  // - Check if a string is empty or only whitespace
  // - Use .trim() to remove whitespace
  // ============================================================

  test('Checking Empty Strings', () => {
    function isValidInput(input: string): boolean {
      // TODO: Return false if input is empty or only whitespace
      // return input.trim().length > 0 ? true : false;
      return input?.trim().length > 0; // Das Fragezeichen stellt sicher das trim() nur angewandt wird wenn input nicht null ist.
    }

    expect(isValidInput('hello')).toBe(true);
    expect(isValidInput('')).toBe(false);
    expect(isValidInput('   ')).toBe(false);
    expect(isValidInput(' test ')).toBe(true);
    // expect(isValidInput(null)).toBe(false);
  });

  // ============================================================
  // Test 5: Logical Operators (&&, ||, !)
  //
  // REQUIREMENTS:
  // - Use && (AND), || (OR), ! (NOT) operators
  // - Combine multiple conditions
  // - difference between equality operators ?
  // ============================================================

  test('Logical Operators', () => {
    function canRunTest(browser: string, isEnabled: boolean): boolean {
      // TODO: Return true if browser is "chrome" AND isEnabled is true
      // if (browser === 'chrome' && isEnabled) return true;
      return browser ==='chrome' && isEnabled
    }

    function shouldSkipTest(status: string, skipFlag: boolean): boolean {
      // TODO: Return true if status is "skipped" OR skipFlag is true
      // if (status === 'skipped' || skipFlag) return true;
      return status === 'skipped' || skipFlag;
    }

    function isNotPending(status: string): boolean {
      // TODO: Return true if status is NOT "pending"
      if (status !== 'pending') return true; 
      return false;
    }

    expect(canRunTest('chrome', true)).toBe(true);
    expect(canRunTest('chrome', false)).toBe(false);
    expect(canRunTest('firefox', true)).toBe(false);

    expect(shouldSkipTest('skipped', false)).toBe(true);
    expect(shouldSkipTest('passed', true)).toBe(true);
    expect(shouldSkipTest('passed', false)).toBe(false);

    expect(isNotPending('passed')).toBe(true);
    expect(isNotPending('pending')).toBe(false);
  });

  // ============================================================
  // Test 6: Ternary Operator
  //
  // REQUIREMENTS:
  // - Use ternary operator: condition ? valueIfTrue : valueIfFalse
  // - More concise than if/else for simple cases
  // ============================================================

  test('Ternary Operator', () => {
    function getStatusIcon(passed: boolean): string {
      // TODO: Use ternary operator
      // Return "✓" if passed is true, otherwise "✗"
      return passed ? '✓' : '✗'
    }

    function getPriority(isCritical: boolean): string {
      // TODO: Return "HIGH" if isCritical, otherwise "NORMAL"
      return isCritical ? "HIGH" : "NORMAL";
    }

    expect(getStatusIcon(true)).toBe('✓');
    expect(getStatusIcon(false)).toBe('✗');
    expect(getPriority(true)).toBe('HIGH');
    expect(getPriority(false)).toBe('NORMAL');
  });

  // ============================================================
  // Test 7: for Loop with Index
  //
  // REQUIREMENTS:
  // - Use traditional for loop with index
  // - Syntax: for (let i = 0; i < array.length; i++)
  // ============================================================

  test('for Loop with Index', () => {
    function sumArray(numbers: number[]): number {
      // TODO: Use for loop to sum all numbers
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }

    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumArray([10, 20, 30])).toBe(60);
  });

  // ============================================================
  // Test 8: for...of Loop
  //
  // REQUIREMENTS:
  // - Use for...of to iterate over array values
  // - Syntax: for (const item of array)
  // - More readable when you don't need the index
  // ============================================================

  test('for...of Loop', () => {
    function countPassed(statuses: string[]): number { // String Array
      // TODO: Use for...of loop to count "passed" statuses
      let passed: number = 0;
      for (const str of statuses) {
        if (str === 'passed') passed++;
      }
      return passed;
    }

    type User = {name: string; age: number};
    function getAllNames(users: Array<User>): string[] { // Array Objekte
      // TODO: Use for...of to extract all names
      const names: string[] = [];
      for (const user of users) {
        names.push(user.name);
      }
      return names;
    }

    expect(countPassed(['passed', 'failed', 'passed', 'skipped'])).toBe(2);

    const users = [
      {name: 'Alice', age: 30},
      {name: 'Bob', age: 25},
      {name: 'Charlie', age: 35},
    ];
    expect(getAllNames(users)).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  // ============================================================
  // Test 9: while Loop
  //
  // REQUIREMENTS:
  // - Use while loop for condition-based iteration
  // - Useful when you don't know iterations in advance
  // ============================================================

  test('while Loop', () => {
    function findFirstFailure(results: string[]): number {
      // TODO: Use while loop to find index of first "failed"
      // Return -1 if not found
      let index = 0;
      while (index < results.length) {
          if (results[index] === "failed") {
              return index;
          }
          index++;
      }
      return -1;
    }

    function retryUntilSuccess(attempts: boolean[]): number {
      // TODO: Count how many attempts until first true
      let count = 0;
      while (count < attempts.length && !attempts[count]) {
        count++;
      }
      return count + 1;
    }

    expect(findFirstFailure(['passed', 'passed', 'failed', 'passed'])).toBe(2);
    expect(findFirstFailure(['passed', 'passed'])).toBe(-1);

    expect(retryUntilSuccess([false, false, true])).toBe(3);
    expect(retryUntilSuccess([true])).toBe(1);
  });

  // ============================================================
  // Test 10: switch Statement
  //
  // REQUIREMENTS:
  // - Use switch for multiple specific value checks
  // - Don't forget break statements!
  // ============================================================

  test('switch Statement', () => {
    function getBrowserCommand(browser: string): string {
      // TODO: Use switch statement to return the organization behind the browser
      switch(browser) {
        case 'chrome':
          return 'Google';
        case 'firefox':
          return 'Mozilla';
        case 'safari':
          return 'Apple';
        case 'edge':
          return 'Microsoft';
        default:
          return '';
      }

    }

    expect(getBrowserCommand('chrome')).toBe('Google');
    expect(getBrowserCommand('firefox')).toBe('Mozilla');
    expect(getBrowserCommand('safari')).toBe('Apple');
    expect(getBrowserCommand('edge')).toBe('Microsoft');
  });

  // ============================================================
  // Test 14: Nullish Coalescing (??)
  //
  // REQUIREMENTS:
  // - Use ?? to provide default values for null/undefined
  // - Different from || (which also treats 0, "" as falsy)
  // ============================================================

  test('Nullish Coalescing', () => {
    function getTimeout(timeout: number | null | undefined): number {
      // TODO: Return timeout if it exists, otherwise return 5000
      return timeout ?? 5000
      // if (timeout === null || timeout === undefined) {
      //   return 5000;
      // }
    }

    function getUserName(name: string | null | undefined): string {
      // TODO: Return name if exists, otherwise "Guest"
      return name ?? 'Guest'
      return '';
    }

    expect(getTimeout(3000)).toBe(3000);
    expect(getTimeout(0)).toBe(0); // 0 is valid, not replaced
    expect(getTimeout(null)).toBe(5000);
    expect(getTimeout(undefined)).toBe(5000);

    expect(getUserName('Alice')).toBe('Alice');
    expect(getUserName(null)).toBe('Guest');
    expect(getUserName(undefined)).toBe('Guest');
  });

  // ============================================================
  // Test 15: Optional Chaining (?.)
  //
  // REQUIREMENTS:
  // - Use ?. to safely access nested properties
  // - Prevents errors when object is null/undefined
  // ============================================================

  test('Optional Chaining', () => {
    interface TestResult {
      name: string;
      details?: {
        duration?: number;
        error?: {
          message?: string;
        };
      };
    }

    function getErrorMessage(result: TestResult): string {
      // TODO: Safely get error message using optional chaining
      return '';
    }

    function getDuration(result: TestResult): number {
      // TODO: Get duration or return 0 if undefined
      return 0;
    }

    const result1: TestResult = {
      name: 'Test 1',
      details: {
        error: {
          message: 'Timeout',
        },
      },
    };

    const result2: TestResult = {
      name: 'Test 2',
    };

    expect(getErrorMessage(result1)).toBe('Timeout');
    expect(getErrorMessage(result2)).toBe('No error');

    const result3: TestResult = {
      name: 'Test 3',
      details: {duration: 1500},
    };

    expect(getDuration(result3)).toBe(1500);
    expect(getDuration(result2)).toBe(0);
  });
});

// ============================================================
// 🎊 When all tests pass, you've mastered control flow! 🎊
// ============================================================
