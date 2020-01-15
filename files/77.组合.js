/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (70.90%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    28.3K
 * Total Submissions: 39.4K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const _combine = (currNum, index, currResult, result) => {
    currResult.push(currNum);

    if (index <= 1) {
      result.push([...currResult]);
      return;
    }

    for (let i = currNum + 1; i <= n; i++) {
      _combine(i, index - 1, currResult, result);
      currResult.pop();
    }

  }
  const ret = [];
  for (let i = 1; i <= n; i++) {
    _combine(i, k, [], ret);
  }
  return ret;
};
// @lc code=end

// module.exports = combine;
