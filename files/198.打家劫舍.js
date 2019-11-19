/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 *
 * https://leetcode-cn.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (41.97%)
 * Likes:    510
 * Dislikes: 0
 * Total Accepted:    51.6K
 * Total Submissions: 122.9K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,1]
 * 输出: 4
 * 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 2:
 * 
 * 输入: [2,7,9,3,1]
 * 输出: 12
 * 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 偷取[0, x]的房子
var rob = function(nums) {
  const len = nums.length;
  if (!len) return 0;

  const robCount = [];
  robCount[len - 1] = nums[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    robCount[i] = robCount[i + 1];
    for (let j = i; j < len; j++) {
      robCount[i] = Math.max(robCount[i], i + 2 < len ? (nums[i] + robCount[i + 2]) : nums[i]);
    }
  }

  return robCount[0];

};
// const nums = [1,2,3,1];
// console.log(rob(nums));
// @lc code=end

