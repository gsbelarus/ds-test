/**
 * №1
 * Напишите функцию на языке “Python” получающую на вход численные значения некоторой
 * случайной величины и вероятности их появления, а возвращающую – ее математическое ожидание и дисперсию.
 */

export const getExpectedValue = (m: number[][]): number => m.reduce( (e, r) => e + r[0] * r[1], 0 );

export const getVariance = (m: number[][]): number => m.reduce( (e, r) => e + r[0] * r[0] * r[1], 0 ) - getExpectedValue(m) ** 2;

const data = [
  [1, 0.1],
  [2, 0.2],
  [3, 0.4],
  [4, 0.2],
  [5, 0.1]
];

console.log(`expected value: ${getExpectedValue(data)}`);
console.log(`variance: ${getVariance(data)}`);