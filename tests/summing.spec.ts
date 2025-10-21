import { test, expect } from '@playwright/test';

export const digitalRoot = (n: number): number => {
    if (n.toString().length === 1) {
        return n;
    }

    let sum = 0;
    const numbersArray = Array.from(String(n), Number);
    for (let number of numbersArray) {
        sum += number;
    }
    return digitalRoot(sum);
};

test('is 15', () => {
    expect(digitalRoot(12345)).toBe(6);
});
