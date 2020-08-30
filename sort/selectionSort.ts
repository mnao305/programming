import { randomArray } from "../array/randomArray";
const { performance } = require('perf_hooks');

/**
 * 選択ソート(昇順)
 *
 * O(n^2)
 * @param {number[]} ary ソートしたい配列
 * @returns {number[]} ソートされた配列
 */
const selectionSort = (ary: number[]): number[] => {
  for (let i = 0; i < ary.length; i++) {
    for (let j = i + 1; j < ary.length; j++) {
      if (ary[i] > ary[j]) {
        // 分割代入便利だ
        [ary[i], ary[j]] = [ary[j], ary[i]];
      }
    }
  }
  return ary;
}

const fromArray = randomArray(10000);
console.log('before => ', fromArray);
const start = performance.now();
console.log('after => ', selectionSort(fromArray));
const end = performance.now();
const elapsed = (end - start);
console.log(`実行時間: ${elapsed.toFixed(3)} ミリ秒`);