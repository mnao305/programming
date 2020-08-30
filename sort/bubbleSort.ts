import { randomArray } from "../array/randomArray";
const { performance } = require('perf_hooks');

/**
 * バブルソート(昇順)
 *
 * O(n^2)
 * @param {number[]} ary ソートしたい配列
 * @returns {number[]} ソートされた配列
 */
const bubbleSort = (ary: number[]): number[] => {
  for (let i = ary.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (ary[j] > ary[j + 1]) {
        [ary[j], ary[j + 1]] = [ary[j + 1], ary[j]];
      }
    }
  }
  return ary;
}

const fromArray = randomArray(10000);
console.log('before => ', fromArray);
const start = performance.now();
console.log('after => ', bubbleSort(fromArray));
const end = performance.now();
const elapsed = (end - start);
console.log(`実行時間: ${elapsed.toFixed(3)} ミリ秒`);