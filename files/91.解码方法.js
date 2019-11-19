/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 *
 * https://leetcode-cn.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (21.90%)
 * Likes:    212
 * Dislikes: 0
 * Total Accepted:    19.7K
 * Total Submissions: 90K
 * Testcase Example:  '"12"'
 *
 * 一条包含字母 A-Z 的消息通过以下方式进行了编码：
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * 给定一个只包含数字的非空字符串，请计算解码方法的总数。
 * 
 * 示例 1:
 * 
 * 输入: "12"
 * 输出: 2
 * 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "226"
 * 输出: 3
 * 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  // 值为0，或者第一位为0
  if (parseInt(s) === 0 || s.charAt(0) === '0') 
    return 0;

  const len = s.length;
  const alphaList = new Array(27).fill(1);
  let decode = [1, 1];
  for (let index = 2; index <= len; index++) {
    const prevChar = s.charAt(index - 2);
    const currChar = s.charAt(index - 1);

    // 连续两个索引代表的数字
    const currTwoNum = s.slice(index - 2, index);
    // 如果有连续两个0
    if (currChar === '0' && (prevChar === '0' || prevChar > "2")) {
      decode[len] = 0;
      break;
    }

    // 110 f(n - 2)
    if (currChar === '0' && index > 2) {
      decode[index] = decode[index - 2];
    } else if (!alphaList[currTwoNum] || currChar === '0') {
      // 不小于26或者当前索引的值为0
      // f(n - 1)
      decode[index] = decode[index - 1];
    } else {
      // f(n) = f(n - 1) + f(n - 2)
      decode[index] = decode[index - 1] + decode[index - 2];
    }
  }

  return decode[len];
};

const partition = (left, right, nums) => {
  if (left >= right) return left;

  const pivot = nums[left];
  let x = left;
  for (let i = left; i <= right; i++) {
    if (nums[i] < pivot) {
      nums[x++] = nums[i];
    }
  }
  nums[x] = pivot;

  return x;
};
const quickSort = (left, right, nums, k) => {
 const p = partition(left, right, nums);
 if (p < k) {
   return quickSort(p + 1, right, nums, k);
 } else if (p > k) {
   return quickSort(left, p - 1, nums, k);
 }
 return nums[p];
};
var findKthLargest = function(nums, k) {
 return quickSort(0, nums.length - 1, nums, nums.length - k);  
}

console.log(findKthLargest([3,2,1,5,6,4], 2));

// console.log(numDecodings('102'));
// @lc code=end

