/**
 * №2
 * Напишите функцию на языке “Python” реализующую скалярное произведение двух векторов произвольной размерности.
 */

export const dotProduct = (a: number[], b: number[]): number => {
  if (a.length !== b.length) {
    throw new Error('Arrays of unequal length');
  }

  return a.reduce(
    (p, element, idx) => p + element * b[idx], 0
  );
};

const a = [1, 2, 3];
const b = [0, -5, 8];

console.log(`a = [${a}]`);
console.log(`b = [${b}]`);
console.log(`a · b = ${dotProduct(a, b)}`);
