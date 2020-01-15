/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (28.43%)
 * Likes:    442
 * Dislikes: 0
 * Total Accepted:    32.2K
 * Total Submissions: 111.3K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 示例 1:
 * 
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let maxSum = 0;
  const len = s.length;
  const indexStack = [ -1 ];
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      indexStack.push(i);
    } else {
      indexStack.pop();
      if (!indexStack.length) {
        indexStack.push(i);
      } else {
        maxSum = Math.max(maxSum, i - indexStack[indexStack.length - 1]);
      }
    }
  }
  return maxSum;
};
// @lc code=end

// module.exports = longestValidParentheses;

