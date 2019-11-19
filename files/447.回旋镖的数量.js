/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 *
 * https://leetcode-cn.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Easy (54.84%)
 * Likes:    61
 * Dislikes: 0
 * Total Accepted:    7K
 * Total Submissions: 12.6K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * 给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k
 * 之间的距离相等（需要考虑元组的顺序）。
 * 
 * 找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。
 * 
 * 示例:
 * 
 * 
 * 输入:
 * [[0,0],[1,0],[2,0]]
 * 
 * 输出:
 * 2
 * 
 * 解释:
 * 两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
const getDist = (point1, point2) => Math.sqrt((point1 * point1 + point2 * point2));

var numberOfBoomerangs = function(points) {
  const len = points.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    const distanceMap = new Map();
    for (let j = 0; j < len; j++) {
      if (j === i) continue;
      const currDistance =  Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
      let count = distanceMap.get(currDistance);
      if (typeof count === 'undefined') {
        count = 0;
      } else {
        result += count * 2;
      }
      
      distanceMap.set(currDistance, ++count);
    }
  }

  return result;
};

// const points = [[2, 1], [2, 2], [3, 2], [1, 2]];
// console.log(numberOfBoomerangs(points));
// @lc code=end

