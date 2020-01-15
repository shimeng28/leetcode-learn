/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (72.28%)
 * Likes:    474
 * Dislikes: 0
 * Total Accepted:    63.1K
 * Total Submissions: 86.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function swap(list, i, j) {
  const tmp = list[i];
  list[i] = list[j];
  list[j] = tmp;
}
function backTrace(len, nums, result, index) {
  if (index === len) {
    result.push(nums.slice(0));
    return;
  }

  for (let i = index; i < len; i++) {
    swap(nums, index, i);
    backTrace(len, nums, result, index + 1);
    swap(nums, index, i);
  }
}


var permute1 = function(nums) {
  const result = [];
  backTrace(nums.length, nums, result, 0);
  return result;
};

const back = function(list, index, result) {
  const len = list.length;
  if (index >= len - 1) {
    result.push(list.slice(0));
    return;
  }

  for (let i = index; i < len; i++) {
    swap(list, i, index);
    back(list, index + 1, result);
    swap(list, index, i);
  }
}


var permute = function(nums) {
  const result = [];
  back(nums, 0, result);
  return result;
}


// @lc code=end


// module.exports = permute;