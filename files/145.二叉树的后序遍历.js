/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal1 = function(root) {
  const result = [];
  if (!root) {
    return result;
  }

  const stack = [];
  stack.push(root);

  while (stack.length) {
    const currNode = stack.pop();
    result.unshift(currNode.val);

    if (currNode.left) {
      stack.push(currNode.left);
    }

    if (currNode.right) {
      stack.push(currNode.right);
    }
  }

  return result;
};

var postorderTraversal = function(root) {
  const result = [];
  if (!root) {
    return result;
  }
  const visitedSet = new Set();
  const stack = [];
  stack.push(root);

  while (stack.length) {
    const currNode = stack[stack.length - 1];
    let leftVisited = true;
    let rightVisited = true;

    if (currNode.right && !visitedSet.has(currNode.right)) {
      rightVisited = false;
      stack.push(currNode.right);
    }

    if (currNode.left && !visitedSet.has(currNode.left)) {
      leftVisited = false;
      stack.push(currNode.left);
    }

    if (leftVisited && rightVisited) {
      result.push(currNode.val);
      visitedSet.add(currNode);
      stack.pop();
    }
  }

  return result;
}
// @lc code=end

module.exports = postorderTraversal;

