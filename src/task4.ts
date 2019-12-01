/**
 * №4
 * Игральную кость бросили N раз. Какова вероятность того, что M раз выпадет число не менее S.
 * Напишите функцию на языке “Python” решения данной задачи, для любых N, M и S.
 */

export const f = (n: number) => n ? f(n - 1) * n : 1;
export const C = (n: number, k: number) => f(n) / (f(k) * f(n - k));
export const p = (s: number) => (7 - s) / 6;
export const P = (n: number, k: number, s: number) => C(n, k) * (p(s) ** k) * ((1 - p(s)) ** (n - k));

console.log(`N = 1, M = 1, S = 3, P = ${P(1, 1, 3)}`);