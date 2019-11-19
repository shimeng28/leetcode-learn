/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 *
 * https://leetcode-cn.com/problems/contains-duplicate-iii/description/
 *
 * algorithms
 * Medium (24.87%)
 * Likes:    105
 * Dislikes: 0
 * Total Accepted:    9.3K
 * Total Submissions: 36.7K
 * Testcase Example:  '[1,2,3,1]\n3\n0'
 *
 * 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j
 * 之间的差的绝对值最大为 ķ。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3, t = 0
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1, t = 2
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,5,9,1,5,9], k = 2, t = 3
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const len = nums.length;
  const end = k >= len ? len : k;
  let result = false;

  for (let i = 0; i < len && !result; i++) {
    for (let j = i + 1; j <= i + end && j < len && !result; j++) {
      if (Math.abs(nums[j] - nums[i]) <= t) {
        result = true;
      }
    }
  }

  return result;
};

// const nums = [1,2,3,1];
// const indexMax = 3;
// const numMax = 0;

// console.log(containsNearbyAlmostDuplicate(nums, indexMax, numMax));

// @lc code=end

