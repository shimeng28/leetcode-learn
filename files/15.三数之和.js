/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (24.26%)
 * Likes:    1505
 * Dislikes: 0
 * Total Accepted:    115.5K
 * Total Submissions: 473.8K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   const len = nums.length;
//   const result = [];
//   const twoNumsSumMap = new Map();
//   const visited = new Set();

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       const twoNumsSum = twoNumsSumMap.get(nums[j]);
//       if (typeof twoNumsSum === 'undefined') {
//         const another = 0 - nums[i] - nums[j];
//         twoNumsSumMap.set(another, [nums[i], nums[j]]);
//       } else {
//         if (!visited.has(nums[j])) {
//           visited.add(nums[j]);
//           result.push([...twoNumsSum, nums[j]]);
//         }
//       }
//     }
//   }
//   return result;
// };
var threeSum = function(nums) {
  const result = [];
  const len = nums.length;
  // 从小到大排序
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[len - 1] < 0) return result;
  for (let i = 0; i < len - 2; i++) {
    let start = i + 1;
    let end = len - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        result.push([nums[i], nums[start], nums[end]]);
      }
      if (sum > 0) {
        while (start < end && nums[end] === nums[--end]) {};
      } else {
        while (start < end && nums[start] === nums[++start]) {};
      }
    }
    while (nums[i] === nums[i+1]) { i++ };
  }
  return result;
};

// const nums = [-1,0,1,5,0,-4];
// console.log(threeSum(nums));
// @lc code=end

