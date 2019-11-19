/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (46.87%)
 * Likes:    6764
 * Dislikes: 0
 * Total Accepted:    656.1K
 * Total Submissions: 1.4M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
  const numToIndex = new Map();
  nums.forEach((item, index) => {
    let val = numToIndex.get(item);
    if (typeof val === 'undefined') {
      val = [];
    }
    val.push(index);
    numToIndex.set(item, val);
  });
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const currSum = nums[start] + nums[end];
    if (currSum === target) {
      break;
    } else if (currSum > target) {
      end--;
    } else {
      start++;
    }
  }
  if (start >= end) return [];
  let startIndexList = numToIndex.get(nums[start]);
  let endIndexList = numToIndex.get(nums[end]);
  if (startIndexList === endIndexList) endIndexList = [startIndexList[1]];

  return (startIndexList[0] > endIndexList[0]
    ? [endIndexList[0], startIndexList[0]]
    : [startIndexList[0], endIndexList[0]]);
};

var twoSum = function(nums, target) {
  const len = nums.length;
  const numToIndexMap = new Map();

  let result = [];
  for (let i = 0; i < len && !result.length; i++) {
    const anotherNum = target - nums[i];
    if (numToIndexMap.has(anotherNum)) {
      [].push.call(result, numToIndexMap.get(anotherNum), i);
    }
    numToIndexMap.set(nums[i], i);
  }

  return result;
}
// const arr = [3, 2, 4];
// const value = 6;
// console.log(twoSum(arr, value));


// @lc code=end

