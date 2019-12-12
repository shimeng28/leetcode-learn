/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 *
 * https://leetcode-cn.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (57.36%)
 * Likes:    140
 * Dislikes: 0
 * Total Accepted:    21.9K
 * Total Submissions: 37.9K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \    / \
 * ⁠       7    2  5   1
 * 
 * 
 * 返回:
 * 
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const getPath = (node, sum, currPath, allPath) => {
  if (!node) return;
  currPath.push(node.val);
  sum -= node.val;
  if (!node.left && !node.right && !sum) {
    allPath.push(currPath);
  } else {
    getPath(node.left, sum, currPath.slice(0), allPath);
    getPath(node.right, sum, currPath.slice(0), allPath);
  }
}
var pathSum = function(root, sum) {
  const allPath = [];
  if (!root) return allPath;
  getPath(root, sum, [], allPath);
  return allPath;
};
// @lc code=end

// module.exports = pathSum;

