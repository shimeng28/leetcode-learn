/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (40.39%)
 * Likes:    176
 * Dislikes: 0
 * Total Accepted:    39.2K
 * Total Submissions: 96.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
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
 * @return {number}
 */
var minDepthRecursion = function(root) {
  function _depth(node) {
    if (!node) {
      return 0;
    }

    if (!node.left) {
      return 1 + _depth(node.right);
    }

    if (!node.right) {
      return 1 + _depth(node.left);
    }

    return Math.min(_depth(node.left), _depth(node.right)) + 1;
  }

  return _depth(root);
};

var minDepth = function(root) {
  let height = 0;
  if (!root) return height;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    height++;
    let count = queue.length;
    let hasEnd = false;
    while (count-- && !hasEnd) {
      hasEnd = true;
      const currNode = queue.shift();
      if (currNode.left) {
        hasEnd = false;
        queue.push(currNode.left);
      }

      if (currNode.right) {
        hasEnd = false;
        queue.push(currNode.right);
      }
    }

    if(hasEnd) return height;
  }

  return height;
}
// @lc code=end
// module.exports = minDepth;
