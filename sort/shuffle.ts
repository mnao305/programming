/**
 * 配列をシャッフルする
 *
 * Fisher-Yates shuffleアルゴリズム
 * @param {number[]} ary - シャッフルする配列
 * @returns {number[]} シャッフルした配列
 */
export const shuffle = (ary: number[]):number[] => {
  for (let i = ary.length - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * i);
    [ary[i], ary[rand]] = [ary[rand], ary[i]];
  }
  return ary;
}