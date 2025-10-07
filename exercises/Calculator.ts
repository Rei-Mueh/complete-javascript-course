/**
 * Calculator Class
 * ================
 *
 * Build a type-safe Calculator class by following the test requirements.
 * Add types, properties, and methods as needed to make the tests pass.
 *
 * Start simple and extend the class step by step!
 */


export class Calculator {
  // TODO: Add properties here as needed by the tests
  private value: number; // let / const -> privte / public
  // static damit es möglich ist PI ohne Object über Calculator.PI aufrufen zu können
  static readonly PI: number = 3.14195;
  static readonly E: number = 2.71828;
  private history: string[];
  private mem: number;
  private UUID: string;

  constructor(initialValue: number = 0) {
    // TODO: Initialize properties
    this.value = initialValue;
    this.history = [];
    this.mem = 0;
  }

  // TODO: Add methods here as required by the tests
  public getValue(): number {
    return this.value;
  }

  public getHistory(): string[] {
    return this.history;
  }
  public clearHistory(): void {
    this.history = [];
  }

  public add(n: number): Calculator {
    this.value += n;
    this.history.push(`add ${n}`);
    return this;
  }

  public subtract(n: number): Calculator {
    this.value -= n;
    this.history.push(`subtract ${n}`);
    return this;
  }

  public multiply(n: number): Calculator {
    this.value *= n;
    this.history.push(`multiply ${n}`);
    return this;
  }

  public divide(n: number): Calculator {
    if (n === 0) throw new Error('Division by zero');
    this.value /= n;
    this.history.push(`divide ${n}`);
    return this;
  }

  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
  static multiply(a: number, b: number): number {
    return a * b;
  }

  public clear(): Calculator {
    this.value = 0;
    return this;
  }

  public memoryStore(): void {
    this.mem = this.value;
  }

  public memoryRecall(): void {
    this.value = this.mem;
  }
}
