/**
 * №9
 * Напишите функцию на языке “Python”, без использования стандартных библиотек,
 * нахождения определителя матрицы любой размерности.
 */

/**
 * Вычисление детерминанта матрицы произвольного размера.
 * @param m массив строк матрицы. каждая строка -- массив чисел.
 */
export const calcDeterminant = (m: number[][]): number => {
  // матрица из одного элемента
  if (m.length === 1 && m[0].length === 1) {
    return m[0][0];
  }

  // 2 на 2
  if (m.length === 2 && m[0].length === 2) {
    return m[0][0] * m[1][1] - m[0][1]*m[1][0];
  }

  // рекурсивно вычитаем с разложением по первой строке
  return m[0].reduce(
    (det, m0i, idx) => det + (idx % 2 ? -1 : 1) * m0i *
      calcDeterminant(
        m.filter( (_, idx) => idx )
        .map( row => row.filter( (_, colIdx) => colIdx !== idx ) )
      ),
  0);
};

const matrix2x2 = [
  [1, -1],
  [2,  2]
];

const matrix3x3 = [
  [1, -2, 3],
  [4,  0, 6],
  [-7, 8, 9]
];

const matrix5x5 = [
  [4,  1,  1,  2,  1],
  [1,  2, -1,  1,  1],
  [3,  1,  1,  1,  1],
  [2,  1,  1,  4,  1],
  [2, -1,  1,  1,  5],
];

//console.log(`matrix2x2 = ${JSON.stringify(matrix2x2, undefined, 2)}`);
console.log(`matrix2x2 -- ${calcDeterminant(matrix2x2)}`);
console.log(`matrix3x3 -- ${calcDeterminant(matrix3x3)}`);
console.log(`matrix5x5 -- ${calcDeterminant(matrix5x5)}`);