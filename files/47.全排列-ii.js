/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (54.89%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    32K
 * Total Submissions: 57K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = [];

  const swap = (list, i, j) => {
    const tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
  };
  const backTrace = (list, index) => {
    const len = list.length;
    if (index >= len - 1) {
      result.push(list.slice(0));
      return;
    }
    const used = new Set();
    for (let i = index; i < len; i++) {
      if (used.has(list[i])) {
        continue;
      }
      used.add(list[i]);
      swap(list, i, index);
      backTrace(list, index + 1);
      swap(list, index, i);
    }
  } 
  backTrace(nums, 0);
  // console.log(JSON.stringify(result));
  return result;
};
// @lc code=end

// module.exports = permuteUnique;

