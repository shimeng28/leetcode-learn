/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (36.00%)
 * Likes:    310
 * Dislikes: 0
 * Total Accepted:    39.1K
 * Total Submissions: 108.8K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const result = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);
  if ((target > 0 && nums[0] > target)
      ||
      (target < 0 && nums[len - 1] < target)
    ) return result;

  for (let i = 0; i < len - 3; i++) {
    for (let j = i + 1; j < len - 2; j++) {
      const anotherSum = target - nums[i] - nums[j];
      let start = j + 1;
      let end = len - 1;
      while (start < end) {
        const sum = nums[start] + nums[end];
        if (sum === anotherSum) {
          result.push([nums[i], nums[j], nums[start], nums[end]]);
        }
        if (sum >= anotherSum) {
          while (start < end && nums[end] === nums[--end]) {}
        } else {
          while (start < end && nums[start] === nums[++start]) {}
        }
      }
      while (nums[j] === nums[j + 1]) { j++ }
    }
    while (nums[i] === nums[i + 1]) { i++ }
  }

  return result;
};


// const arr = [-1,-5,-5,-3,2,5,0,4];
// const sum = -7;
// console.log(fourSum(arr, sum));
// @lc code=end

