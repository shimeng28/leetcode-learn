/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，
 * 找出该数组中满足其和 ≥ s 的长度最小的连续子数组。
 * 如果不存在符合条件的连续子数组，返回 0。
 * 
 * 输入: s = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen1 = function(s, nums) {
  const len = nums.length;
  
  // [start, end - 1]
  let start = 0;
  let end = -1;
  let currSum = nums[start];
  let minLen = len + 1;

  while (start < end && end <= len) {
    if (currSum < s && end < len) {
      end++;
      currSum += nums[end - 1];
    } else if (currSum >= s) {
      hasResult = true;
      if (end - start < minLen) {
        minLen = end - start;
      }
      currSum -= nums[start];
      start++;
    } else {
      end++;
    }
  }

  return hasResult ? minLen : 0;
};

var minSubArrayLen = function(s, nums) {
  const len = nums.length;
  
  // [ start, end ]
  let start = 0;
  let end = -1;
  let sum = 0;
  let minLen = len + 1;

  while (start < len) {
    if (end + 1 < len && sum < s) {
      sum += nums[++end];
    } else {
      sum -= nums[start++];
    }

    if (sum >= s && end - start < minLen) {
      minLen = end - start + 1;
    }
  }

  if (minLen === len + 1) {
    return 0;
  }

  return minLen;
};
const sum = 7;
const nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(sum, nums));