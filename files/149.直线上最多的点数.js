/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 *
 * https://leetcode-cn.com/problems/max-points-on-a-line/description/
 *
 * algorithms
 * Hard (18.89%)
 * Likes:    89
 * Dislikes: 0
 * Total Accepted:    5.8K
 * Total Submissions: 30.4K
 * Testcase Example:  '[[1,1],[2,2],[3,3]]'
 *
 * 给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。
 * 
 * 示例 1:
 * 
 * 输入: [[1,1],[2,2],[3,3]]
 * 输出: 3
 * 解释:
 * ^
 * |
 * |        o
 * |     o
 * |  o  
 * +------------->
 * 0  1  2  3  4
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * 输出: 4
 * 解释:
 * ^
 * |
 * |  o
 * |     o        o
 * |        o
 * |  o        o
 * +------------------->
 * 0  1  2  3  4  5  6
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
const memo = {};
const getGcd = (x, y) => {
  if (typeof memo[`${x}/${y}`] !== 'undefined') 
    return memo[`${x}/${y}`];
  if (y === 0) {
    return x;
  }
 
  memo[`${x}/${y}`] = getGcd(y, x % y);
  return memo[`${x}/${y}`];
}
var maxPoints = function(points) {
  const len = points.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    const linePointMap = new Map();
    let zero = 0;
    let tmp_result = 0;
    for (let j = i + 1; j < len; j++) {
      let dy = points[j][1] - points[i][1];
      let dx = points[j][0] - points[i][0];
      if (dy === 0 && dx === 0) {
        zero++;
        continue;
      }
      const gcd = getGcd(dy, dx);
      if (gcd !== 0) {
        dy /= gcd;
        dx /= gcd;
      }
      const key = `${dy}/${dx}`
      let count = linePointMap.get(key);
      if (typeof count === 'undefined') {
        count = 0;
      }
      count++;
      tmp_result = Math.max(tmp_result, count);
      linePointMap.set(key, count);
    }
    result = Math.max(result, zero + tmp_result + 1);
  }
  return result;
};

// const points = [[1,1],[2,2],[3,3]];
// console.log(maxPoints(points));
// @lc code=end

