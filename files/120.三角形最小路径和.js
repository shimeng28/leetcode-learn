/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (62.19%)
 * Likes:    235
 * Dislikes: 0
 * Total Accepted:    26.1K
 * Total Submissions: 42K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 
 * 例如，给定三角形：
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 说明：
 * 
 * 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 方法1 递归实现
var minimumTotal1 = function(triangle) {
  const minPath = (level, index, list) => {
    if (level === list.length - 1) return list[level][index];
    const left = minPath(level + 1, index, list);
    const right = minPath(level + 1, index + 1, list);
  
    return Math.min(left, right) + list[level][index];
  };
  return minPath(0, 0, triangle);
};

// 方法二 增加记忆化
var minimumTotal2 = function(triangle) {
  const minPath = (level, index, list, memo) => {
    if (level === list.length - 1) return list[level][index];
  
    if (!memo[level]) memo[level] = [];
  
    if (typeof memo[level][index] !== 'undefined') {
      return memo[level][index];  
    }
  
    const left = minPath(level + 1, index, list, memo);
    const right = minPath(level + 1, index + 1, list, memo);
    memo[level][index] = Math.min(left, right) + list[level][index];
  
    return memo[level][index];
  };
  const memo = [];
  return minPath(0, 0, triangle, memo);
};

// DP
var minimumTotal = function(triangle) {
  const memo = [];
  let currLevel = triangle.length - 1;
  memo[currLevel] = [];
  for (let j = 0; j < triangle[currLevel].length; j++) {
    memo[currLevel][j] = triangle[currLevel][j];
  }

  for (let i = currLevel - 1; i >= 0; i--) {
    if (!memo[i]) memo[i] = [];
    for (let j = 0; j < triangle[i].length; j++) {
      memo[i][j] = Math.min(memo[i+1][j], memo[i+1][j+1]) + triangle[i][j];
    }
  }

  return memo[0][0];
}

// const value = [[2],[3,4],[6,5,7]];
// console.log(minimumTotal(value));

// @lc code=end

