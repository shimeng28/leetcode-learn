/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 *
 * https://leetcode-cn.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (51.01%)
 * Likes:    220
 * Dislikes: 0
 * Total Accepted:    23.5K
 * Total Submissions: 46K
 * Testcase Example:  '12'
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 示例 1:
 * 
 * 输入: n = 12
 * 输出: 3 
 * 解释: 12 = 4 + 4 + 4.
 * 
 * 示例 2:
 * 
 * 输入: n = 13
 * 输出: 2
 * 解释: 13 = 4 + 9.
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */


var numSquares = function(n) {
  const count = [1, 1];

  for (let num = 2; num <= n; num++) {
    let currCount = count[num - 1] + 1;
    const halfNum = parseInt(num / 2);
    for (let exp = 1; exp <= halfNum && exp * exp <= num; exp++) {
      currCount = Math.min(currCount, (count[exp * exp] || 0) + count[num - exp * exp]);
    }
    count[num] = currCount;
  }  
  return count[n]; 
};

// console.log(numSquares(12));
// @lc code=end

