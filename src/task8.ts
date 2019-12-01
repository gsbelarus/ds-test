/**
 * №8
 * В последнем издании британской энциклопедии N страниц, на каждой странице стоит ее номер.
 * Сумасшедший наборщик подсчитал, что для набора всех номеров страниц понадобилось M литер.
 * Ваша задача по данному числу литер M, 1≤M≤10^9, определить число страниц N. Число M таково,
 * что ему соответствует некоторое число N.
 * Необходимо написать программу принимающую на входе число M, возвращающую число N.
 */

const calcLiterCount = (N: number) => {
  const rec = (e: number) => e ? 9 * (10 ** e) * (e + 1) + rec( e - 1) : 9;
  const exp = Math.trunc(Math.log10(N));
  const start = 10 ** exp;
  return (N - start + 1) * (exp + 1) + (exp > 0 ? rec(exp - 1) : 0);
};

export const getPageCount = (M: number): number => {
  let n = 1;
  let delta = 0.5;

  let m = calcLiterCount(n);

  if (m === M) {
    return n;
  }

  while (delta) {
    while (m < M) {
      delta *= 2;
      n += delta;
      m = calcLiterCount(n);
    }

    if (m === M) {
      return n;
    }

    n -= delta;
    delta = Math.floor(delta / 2);
    n += delta;
    m = calcLiterCount(n);

    if (m === M) {
      return n;
    }
  }

  throw new Error(`Invalid number`);
};

console.log(`M = 9, N = ${getPageCount(9)}`);
console.log(`M = 11, N = ${getPageCount(11)}`);
console.log(`M = 189, N = ${getPageCount(189)}`);
console.log(`M = 38894, N = ${getPageCount(38894)}`);