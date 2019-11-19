/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (62.56%)
 * Likes:    305
 * Dislikes: 0
 * Total Accepted:    37.6K
 * Total Submissions: 60.1K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

const goWay1 = (level, index, grid, memo) => {
  if (typeof memo[level] === 'undefined') {
    memo[level] = [];
  }
  if (typeof memo[level][index] !== 'undefined') {
    return memo[level][index];
  }
  // 右下角
  if (level === (grid.length - 1) && index === (grid[level].length - 1)) {
    memo[level][index] = grid[level][index];
    return memo[level][index];
  } 

  // 最右边一列
  if (index === grid[level].length - 1) {
    memo[level][index] = goWay(level + 1, index, grid, memo) + grid[level][index];
    return memo[level][index];
  }

  // 最底部一行
  if (level === grid.length - 1) {
    memo[level][index] = goWay(level, index + 1, grid, memo) + grid[level][index];
    return memo[level][index];
  }
  
  const bottom = goWay(level + 1, index, grid, memo);
  const right = goWay(level, index + 1, grid, memo);

  memo[level][index] = Math.min(bottom, right) + grid[level][index];
  return memo[level][index];
};

var minPathSum1 = function(grid) {
  const memo = [];
  return goWay(0, 0, grid, memo);
};

var minPathSum = function(grid) {
  const memo = [];
  const allLevel = grid.length - 1;
  for (let level = allLevel; level >= 0; level--) {
    const maxIndex = grid[level].length - 1;
    for (let index = maxIndex; index >= 0; index--) {
      // 最底部一行
      if (allLevel === level) {
        memo[index] = (index === maxIndex) 
          ? grid[level][index]
          : memo[index + 1] + grid[level][index];
        continue;
      }
      // 是否在最右边一列
      memo[index] = (index === maxIndex) 
        ? memo[index] + grid[level][index]
        : Math.min(memo[index], memo[index + 1]) + grid[level][index];
    }
  }

  return memo[0];
};

// @lc code=end

