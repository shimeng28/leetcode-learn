/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];
  function backtrace(currNum, currSum, numCount, currList) {
    // 递归终止条件
    if (!numCount && !currSum) {
      result.push([...currList]);
      return;
    }

    // 此时超出允许包含的正整数 或者当前的组合已经超出了给定的和
    if (currSum < 0 || currNum > 9) {
      return;
    }

    backtrace(currNum + 1, currSum, numCount, [...currList]);
    backtrace(currNum + 1, currSum - currNum, numCount - 1, [...currList, currNum]);
  }
  backtrace(1, n, k, [], result);
  return result;
};

// module.exports = combinationSum3;
// console.log(combinationSum3(3, 7));
// @lc code=end

