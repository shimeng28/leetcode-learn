/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

const calWay = (n, memo) => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (typeof memo[n] === 'undefined') {
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  }
  
  return memo[n];
};
var climbStairs1 = function(n) {
  const memo = new Array(n);
  return calWay(n, memo);
};

var climbStairs = function(n) {
  const memo = new Array(n);
  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};
// @lc code=end

