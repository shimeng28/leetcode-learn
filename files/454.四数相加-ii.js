/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 *
 * https://leetcode-cn.com/problems/4sum-ii/description/
 *
 * algorithms
 * Medium (53.86%)
 * Likes:    88
 * Dislikes: 0
 * Total Accepted:    11.2K
 * Total Submissions: 20.7K
 * Testcase Example:  '[1,2]\n[-2,-1]\n[-1,2]\n[0,2]'
 *
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] +
 * D[l] = 0。
 * 
 * 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -2^28 到 2^28 - 1
 * 之间，最终结果不会超过 2^31 - 1 。
 * 
 * 例如:
 * 
 * 
 * 输入:
 * A = [ 1, 2]
 * B = [-2,-1]
 * C = [-1, 2]
 * D = [ 0, 2]
 * 
 * 输出:
 * 2
 * 
 * 解释:
 * 两个元组如下:
 * 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
 * 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const len = A.length;
  const abSumMap = new Map();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const sum = A[i] + B[j];
      let count = abSumMap.get(sum);
      if (typeof count === 'undefined') {
        count = 0;
      }
      abSumMap.set(sum, ++count);
    }
  }

  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const another = 0 - C[i] - D[j];
      const count = abSumMap.get(another);
      if (typeof count !== 'undefined') {
        result += count;
      }
    }
  }

  return result;
};
// const A = [1];
// const B = [-1];
// const C = [0];
// const D = [1];

// console.log(fourSumCount(A, B, C, D));

// @lc code=end

