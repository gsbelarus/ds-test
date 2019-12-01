/**
 * №3
 * Напишите функцию на языке “Python” реализующую нахождение длины вектора произвольной размерности.
 */

export const length = (v: number[]): number => Math.sqrt(v.reduce( (p, c) => p + c * c, 0 ));

const a = [2, 2];

console.log(`a = [${a}]`);
console.log(`|a| = ${length(a)}`);
