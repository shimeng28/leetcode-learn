/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode-cn.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (60.31%)
 * Likes:    173
 * Dislikes: 0
 * Total Accepted:    19.3K
 * Total Submissions: 31.7K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 输入:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * 输出: ["1->2->5", "1->3"]
 * 
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
const getPath = (node, currPath, pathsList) => {
  if (!node) return;
  currPath += String(node.val);
  if (!node.left && !node.right) {
    pathsList.push(currPath);
  } else {
    currPath += '->';
    getPath(node.left, currPath, pathsList);
    getPath(node.right, currPath, pathsList);
  }
}

var binaryTreePaths = function(root) {
  const pathsList = [];
  getPath(root, '', pathsList);
  return pathsList;
};
// @lc code=end

module.exports = binaryTreePaths;

