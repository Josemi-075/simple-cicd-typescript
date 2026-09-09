/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Returns the subtraction of two numbers.
 */
function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Returns the multiplication of two numbers.
 */
function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Returns the division of two numbers.
 * Throws an error when dividing by zero.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

// Expose functions to window so the HTML script can call them
const win = window as unknown as {
  sum: typeof sum;
  subtract: typeof subtract;
  multiply: typeof multiply;
  divide: typeof divide;
};

win.sum = sum;
win.subtract = subtract;
win.multiply = multiply;
win.divide = divide;

