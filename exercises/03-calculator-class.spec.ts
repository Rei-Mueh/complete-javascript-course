/**
 * TypeScript Calculator Class Exercise
 * =====================================
 *
 * Build a type-safe Calculator class with state management!
 *
 * Your mission: Extend the Calculator class to make all tests pass.
 * Read the requirements in each test and implement the needed functionality.
 *
 * HOW TO WORK:
 * 1. Run the tests
 * 2. Read the requirements (comments) in each test
 * 3. Add the necessary properties/methods to Calculator.ts
 * 4. Add proper TypeScript types
 * 5. Make all tests pass!
 *
 * Learning Goals:
 * - Class properties and types
 * - Method signatures
 * - State management
 * - Method chaining
 * - Access modifiers
 * - Static members
 * - Readonly properties
 *
 * Ready? Let's build! 🚀
 */

import {test, expect} from '@playwright/test';
import {Calculator} from './Calculator';
import { E } from '@faker-js/faker/dist/airline-CLphikKp';

test.describe('TypeScript Calculator Class', () => {
  // ============================================================
  // Test 1: Basic Structure and Initialization
  //
  // REQUIREMENTS:
  // - Add a private property 'value' of type number
  // - Initialize 'value' to 0 in the constructor
  // - Add a method getValue() that returns the current value
  // - getValue() should have proper return type annotation
  // ============================================================

  test('Basic Structure and Initialization', () => {
    const calc = new Calculator();
    expect(calc.getValue()).toBe(0);
  });

  // ============================================================
  // Test 2: Basic Addition
  //
  // REQUIREMENTS:
  // - Add a method add(n: number): number
  // - The method should add n to the current value
  // - Return the new value
  // - Use proper type annotations for parameter and return type
  // ============================================================

  test('Basic Addition', () => {
    const calc = new Calculator();
    expect(calc.add(5)).toBe(5);
    expect(calc.add(3)).toBe(8);
    expect(calc.getValue()).toBe(8);
  });

  // ============================================================
  // Test 3: Basic Subtraction
  //
  // REQUIREMENTS:
  // - Add a method subtract(n: number): number
  // - The method should subtract n from the current value
  // - Return the new value
  // - Use proper type annotations
  // ============================================================

  test('Basic Subtraction', () => {
    const calc = new Calculator();
    calc.add(10);
    expect(calc.subtract(3)).toBe(7);
    expect(calc.subtract(2)).toBe(5);
  });

  // ============================================================
  // Test 4: Multiplication and Division
  //
  // REQUIREMENTS:
  // - Add a method multiply(n: number): number
  // - Add a method divide(n: number): number
  // - Both methods should modify and return the current value
  // - Division by zero should throw an Error with message "Division by zero"
  // ============================================================

  test('Multiplication and Division', () => {
    const calc = new Calculator();
    calc.add(10);
    expect(calc.multiply(3)).toBe(30);
    expect(calc.divide(5)).toBe(6);

    const calc2 = new Calculator();
    calc2.add(10);
    expect(() => calc2.divide(0)).toThrow('Division by zero');
  });

  // ============================================================
  // Test 5: Method Chaining
  //
  // REQUIREMENTS:
  // - Modify add() to return 'this' instead of the value
  // - Modify subtract() to return 'this' instead of the value
  // - Modify multiply() to return 'this' instead of the value
  // - Modify divide() to return 'this' instead of the value
  // - Update return type annotations to ': this'
  // - This enables fluent interface (method chaining)
  // ============================================================

  test('Method Chaining', () => {
    const calc = new Calculator();

    calc.add(10).subtract(3).multiply(2).divide(2);

    expect(calc.getValue()).toBe(7);
  });

  // ============================================================
  // Test 6: Clear Method
  //
  // REQUIREMENTS:
  // - Add a method clear(): this
  // - The method should reset the value to 0
  // - Return 'this' for chaining
  // ============================================================

  test('Clear Method', () => {
    const calc = new Calculator();
    calc.add(50).multiply(2);
    expect(calc.getValue()).toBe(100);

    calc.clear();
    expect(calc.getValue()).toBe(0);

    // Should work with chaining
    calc.add(5).clear().add(10);
    expect(calc.getValue()).toBe(10);
  });

  // ============================================================
  // Test 7: Constructor with Initial Value
  //
  // REQUIREMENTS:
  // - Modify constructor to accept optional parameter: initialValue?: number
  // - If provided, set value to initialValue
  // - If not provided, default to 0
  // - Add proper type annotation
  // ============================================================

  test('Constructor with Initial Value', () => {
    const calc1 = new Calculator();
    expect(calc1.getValue()).toBe(0);

    const calc2 = new Calculator(100);
    expect(calc2.getValue()).toBe(100);

    calc2.add(50);
    expect(calc2.getValue()).toBe(150);
  });

  // ============================================================
  // Test 8: Static Utility Methods
  //
  // REQUIREMENTS:
  // - Add static method add(a: number, b: number): number
  //   - Returns a + b
  // - Add static method subtract(a: number, b: number): number
  //   - Returns a - b
  // - Add static method multiply(a: number, b: number): number
  //   - Returns a * b
  // - These are utility methods that don't need a calculator instance
  // ============================================================

  test('Static Utility Methods', () => {
    expect(Calculator.add(5, 3)).toBe(8);
    expect(Calculator.subtract(10, 4)).toBe(6);
    expect(Calculator.multiply(7, 6)).toBe(42);

    // Can be called without creating an instance
    const result = Calculator.add(Calculator.multiply(3, 4), Calculator.subtract(10, 5));
    expect(result).toBe(17); // (3*4) + (10-5) = 12 + 5 = 17
  });

  // ============================================================
  // Test 9: Static Constants
  //
  // REQUIREMENTS:
  // - Add static readonly property PI: number = 3.14159
  // - Add static readonly property E: number = 2.71828
  // - These are mathematical constants accessible from the class
  // ============================================================

  test('Static Constants', () => {
    expect(Calculator.PI).toBeCloseTo(3.14159);
    expect(Calculator.E).toBeCloseTo(2.71828);

    // Can be used in calculations
    const calc = new Calculator(10);
    calc.multiply(Calculator.PI);
    expect(calc.getValue()).toBeCloseTo(31.4159);
  });

  // ============================================================
  // Test 10: Operation History
  //
  // REQUIREMENTS:
  // - Add a private property 'history' of type: string[]
  // - Initialize as empty array in constructor
  // - Modify add() to push "add X" to history (where X is the number)
  // - Modify subtract() to push "subtract X" to history
  // - Modify multiply() to push "multiply X" to history
  // - Modify divide() to push "divide X" to history
  // - Add method getHistory(): string[] that returns the history array
  // - Add method clearHistory(): this that empties the history array
  // ============================================================

  test('Operation History', () => {
    const calc = new Calculator();

    calc.add(10).subtract(3).multiply(2);

    const history = calc.getHistory();
    expect(history).toEqual(['add 10', 'subtract 3', 'multiply 2']);

    calc.divide(7);
    expect(calc.getHistory()).toHaveLength(4);
    expect(calc.getHistory()[3]).toBe('divide 7');

    calc.clearHistory();
    expect(calc.getHistory()).toHaveLength(0);

    calc.add(5);
    expect(calc.getHistory()).toEqual(['add 5']);
  });

  // ============================================================
  // FINAL Test: Complete Calculator
  //
  // This test combines everything you've built.
  // If this passes, you've successfully created a full-featured
  // type-safe Calculator class! 🎉
  // ============================================================

  test('FINAL: Complete Calculator', () => {
    // Create calculator with initial value
    const calc = new Calculator(50);
    expect(calc.getValue()).toBe(50);

    // Perform chained operations
    calc
      .add(Calculator.multiply(5, 2)) // add 10
      .subtract(20)
      .multiply(2);

    expect(calc.getValue()).toBe(80); // (50 + 10 - 20) * 2 = 80

    // Store in memory
    calc.memoryStore();

    // Do more calculations
    calc.divide(4).add(30);
    expect(calc.getValue()).toBe(50); // 80/4 + 30 = 50

    // Recall from memory
    calc.memoryRecall();
    expect(calc.getValue()).toBe(80);

    // Check history
    const history = calc.getHistory();
    expect(history).toContain('add 10');
    expect(history).toContain('divide 4');

    // Clear and verify
    calc.clear();
    expect(calc.getValue()).toBe(0);

    // Verify unique ID
    expect(calc.getId()).toBeTruthy();
  });
});

// ============================================================
// 🎊 When all tests pass, you've mastered TypeScript classes! 🎊
// ============================================================
