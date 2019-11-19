/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 *
 * https://leetcode-cn.com/problems/ones-and-zeroes/description/
 *
 * algorithms
 * Medium (46.12%)
 * Likes:    90
 * Dislikes: 0
 * Total Accepted:    3.7K
 * Total Submissions: 8K
 * Testcase Example:  '["10","0001","111001","1","0"]\n5\n3'
 *
 * 在计算机界中，我们总是追求用有限的资源获取最大的收益。
 * 
 * 现在，假设你分别支配着 m 个 0 和 n 个 1。另外，还有一个仅包含 0 和 1 字符串的数组。
 * 
 * 你的任务是使用给定的 m 个 0 和 n 个 1 ，找到能拼出存在于数组中的字符串的最大数量。每个 0 和 1 至多被使用一次。
 * 
 * 注意:
 * 
 * 
 * 给定 0 和 1 的数量都不会超过 100。
 * 给定字符串数组的长度不会超过 600。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3
 * 输出: 4
 * 
 * 解释: 总共 4 个字符串可以通过 5 个 0 和 3 个 1 拼出，即 "10","0001","1","0" 。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: Array = {"10", "0", "1"}, m = 1, n = 1
 * 输出: 2
 * 
 * 解释: 你可以拼出 "10"，但之后就没有剩余数字了。更好的选择是拼出 "0" 和 "1" 。
 * 
 * 
 */

// @lc code=start
/**
 * 用m个0和n个1凭出x个array中的字符串
 * f(m, n, x) = f(m, n, x - 1) || f(m - arr[x - 1], n - arr[x - 1], x - 1);
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const len = strs.length;
  if (!len) return 0;

  const memo = [];
  for (let z = 0; z < len; z++) {
    let mCount = 0;
    let nCount = 0;
    const strLen = strs[z].length;
    for (let j = 0; j < strLen; j++) {
      if (strs[z][j] === '0') mCount++;
      else if (strs[z][j] === '1') nCount++;
    }
    for (let i = m; i >= mCount; i--) {
      if (typeof memo[i] === 'undefined') memo[i] = [];
      for (let j = n; j >= nCount; j--) {
        const prev = (memo[i - mCount] && memo[i - mCount][j - nCount]) || 0;
        memo[i][j] = Math.max(memo[i][j] || 0, (prev + 1));
      }
    }     
  }

  return (memo[m] && memo[m][n]) || 0;
};

// const value = ["00","000"];
// const m = 1;
// const n = 10;
// console.log(findMaxForm(value, m, n));
// @lc code=end

