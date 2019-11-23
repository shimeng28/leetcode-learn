/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = [];
  if (!root) return result;
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const currNode = stack.pop();
    if (!currNode) {
      continue;
    }
    result.push(currNode.val);
    if (currNode.right) {
      stack.push(right);
    }
    if (currNode.left) {
      stack.push(left);
    }
  }

  return result;
};
// @lc code=end

// module.exports = preorderTraversal;
