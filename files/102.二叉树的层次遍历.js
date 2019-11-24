/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (59.23%)
 * Likes:    318
 * Dislikes: 0
 * Total Accepted:    59.3K
 * Total Submissions: 99.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
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
var levelOrder1 = function(root) {
  const result = [];
  if (!root) {
    return result;
  }  
  let queue = [];
  queue.push(root);
  while (queue.length) {
    const levelRes = [];
    const tmpQueue = [];
    let currNode = queue.shift();
    while (currNode) {
      levelRes.push(currNode.val);
      if (currNode.left) {
        tmpQueue.push(currNode.left);
      }
  
      if (currNode.right) {
        tmpQueue.push(currNode.right);
      }
      currNode = queue.shift();
    }
    result.push(levelRes);
    queue = tmpQueue;
  }

  return result;
};

var levelOrder = function(root) {
  const result = [];
  if (!root) {
    return result;
  }  
  let queue = [];
  queue.push(root);
  while (queue.length) {
    const levelRes = [];
    let count = queue.length;
    while (count > 0) {
      const currNode = queue.shift();
      levelRes.push(currNode.val);
      if (currNode.left) {
        queue.push(currNode.left);
      }

      if (currNode.right) {
        queue.push(currNode.right);
      }
      count--;
    }
    result.push(levelRes);
  }

  return result;
};
// @lc code=end

