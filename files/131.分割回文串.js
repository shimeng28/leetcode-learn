/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 *
 * https://leetcode-cn.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (64.08%)
 * Likes:    187
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 27.3K
 * Testcase Example:  '"aab"'
 *
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
 * 
 * 返回 s 所有可能的分割方案。
 * 
 * 示例:
 * 
 * 输入: "aab"
 * 输出:
 * [
 * ⁠ ["aa","b"],
 * ⁠ ["a","a","b"]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
function isPalindrome(str) {
  let left = 0;
  let end = str.length - 1;
  while (left <= end) {
    if (str[left] !== str[end]) return false;
    left++;
    end--;
  }

  return true;
}
function splitPalindrome(start, str, currList, resultList) {
  const len = str.length;
  // 递归终止条件
  if (start === len) {
    resultList.push(currList.slice(0));
    return;
  }

  for (let end = start + 1; end <= len; end++) {
    const currChar = str.slice(start, end);
    // 如果当前字符是回文串
    if (isPalindrome(currChar)) {
      currList.push(currChar);
      splitPalindrome(end, str, currList, resultList);
      currList.pop();
    } else {
      continue;
    }
  }

}
var partition = function(s) {
  const result = [];
  splitPalindrome(0, s, [], result);
  return result;
};
// @lc code=end

module.exports = partition;

