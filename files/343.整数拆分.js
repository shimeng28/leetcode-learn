/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 *
 * https://leetcode-cn.com/problems/integer-break/description/
 *
 * algorithms
 * Medium (52.85%)
 * Likes:    117
 * Dislikes: 0
 * Total Accepted:    11.6K
 * Total Submissions: 21.9K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * 
 * 示例 1:
 * 
 * 输入: 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 * 
 * 示例 2:
 * 
 * 输入: 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 * 
 * 说明: 你可以假设 n 不小于 2 且不大于 58。
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/*
const memo1 = [];
var integerBreak1 = function(n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (typeof memo1[n] !== 'undefined') return memo[n];

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = Math.max(result, Math.max(i * (n - i), i * integerBreak(n - i)));
  }
  memo1[n] = result;
  return result;
};
*/

var integerBreak = function(n) {
  const memo = [1, 1];
  memo[2] = 1;

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i] || 1 * (i - 1);
    for (let j = 1; j <= i - 1; j++) {
      memo[i] = Math.max(memo[i], Math.max(j * memo[i - j], j * (i - j)));
    }
  }

  return memo[n];
}




// @lc code=end

