import { shuffle } from "./shuffle";
/**
 * シャッフルされた配列を作る
 * @param {number} len 要素数
 * @returns {number[]} 0からlenまでの値が入ったシャッフル済みの配列
 */
export const randomArray = (len: number): number[] => {
  const ary: number[] = [...Array(len)].map((v, i) => i);
  return shuffle(ary);
}
