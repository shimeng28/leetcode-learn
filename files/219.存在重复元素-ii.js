/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (36.06%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    25.3K
 * Total Submissions: 69.7K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j
 * 的差的绝对值最大为 k。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const numToIndexMap = new Map();
  let result = false;
  const len = nums.length;
  for (let i = 0; i < len && !result; i++) {
    let sameNumIndex = numToIndexMap.get(nums[i]);
    if (typeof sameNumIndex === 'undefined') {
      numToIndexMap.set(nums[i], i);
    } else {
      const near = Math.abs(sameNumIndex - i);
      if (near <= k) {
        result = true;
      } else {
        numToIndexMap.set(nums[i], i);
      }
    }
  }

  return result;
};
// @lc code=end

