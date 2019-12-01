/**
 * №7
 * Напишите программу на языке “Python” нахождения количества N значных чисел делящихся на m.
 * Ограничение на время ее выполнения для 4-х значных чисел не более 4 сек.
 *
 * Имеется ввиду делящихся без остатка?
 *
 */

export const getMultiplicity = (N: number, m: number): number => {
  let r = 0;
  const lowLimit = 10 ** (N - 1);
  const upLimit = lowLimit * 10;
  const s = Math.floor(lowLimit / m) * m;

  for (let v = s < m ? m : s; v < upLimit; v+=m) {
    r++;
  }

  return r;
};

const data = [
  [1, 1],
  [1, 9],
  [2, 1],
  [2, 99],
  [4, 10000],
  [4, 1000],
  [4, 9999],
  [4, 1],
  [4, 11],
  [4, 2],
];

data.forEach( d => console.log(`N = ${d[0]}, m = ${d[1]} => ${getMultiplicity(d[0], d[1])}`) );