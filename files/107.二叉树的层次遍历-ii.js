/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (62.91%)
 * Likes:    156
 * Dislikes: 0
 * Total Accepted:    31.7K
 * Total Submissions: 50.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const resultFront = [];
  if (!root) return resultFront;

  const queue = [];
  queue.push(root);

  while (queue.length) {
    const levelRes = [];
    let size = queue.length;
    while (size > 0) {
      const currNode = queue.shift();
      levelRes.push(currNode.val);

      if (currNode.left) {
        queue.push(currNode.left);
      }

      if (currNode.right) {
        queue.push(currNode.right);
      }

      size--;
    }

    resultFront.unshift(levelRes);
  }

  return resultFront;
};
// @lc code=end

