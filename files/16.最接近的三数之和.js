/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.85%)
 * Likes:    287
 * Dislikes: 0
 * Total Accepted:    53.5K
 * Total Submissions: 127.5K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length;
  if (len < 3) {
    return nums.reduce((count, item) => (count + item), 0);
  }
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  let closeCount = Math.abs(result - target);
  for (let i = 0; i < len - 2; i++) {
    let start = i + 1;
    let end = len - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      const currClose = Math.abs(sum - target);
      if (currClose <= closeCount) {
        result = sum;
        closeCount = currClose;
      }
      if (sum >= target) {
        end--;
      } else {
        start++;
      }
    }
  }

  return result;
};

// const list = [0,1,2];
// const target = 0;
// console.log(threeSumClosest(list, target));
// @lc code=end

