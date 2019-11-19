/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 *
 * https://leetcode-cn.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (44.51%)
 * Likes:    147
 * Dislikes: 0
 * Total Accepted:    11.3K
 * Total Submissions: 25.9K
 * Testcase Example:  '[1,5,11,5]'
 *
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * 注意:
 * 
 * 
 * 每个数组中的元素不会超过 100
 * 数组的大小不会超过 200
 * 
 * 
 * 示例 1:
 * 
 * 输入: [1, 5, 11, 5]
 * 
 * 输出: true
 * 
 * 解释: 数组可以分割成 [1, 5, 5] 和 [11].
 * 
 * 
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1, 2, 3, 5]
 * 
 * 输出: false
 * 
 * 解释: 数组不能分割成两个元素和相等的子集.
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 状态使得[0, n]中有x个数的和为sum/2
// f(x, sum) = f(x - 1, sum - arr[x]) + arr[x]
//              || f(x - 1, sum)
var canPartition = function(nums) {
  const len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }

  if (sum % 2 === 0) {
    sum /= 2;
  } else {
    return false;
  }
  
  const total = [[]];
  for (let i = 0; i <= sum; i++) {
    total[0][i] = nums[0] === i ? 1 : 0;
  }
  for (let index = 1; index < len; index++) {
    if (typeof total[index] === "undefined") total[index] = [];
    for (let count = 0; count <= sum; count++) {
      total[index][count] = 
        total[index - 1][count] === 1
        ? 1
        : (total[index - 1][count - nums[index]] === 1)
          ? 1
          : 0;
    }
  }

  return total[len - 1][sum] === 1;
};

// const values = [3,3,3,4,5];
// console.log(canPartition(values))



// @lc code=end

