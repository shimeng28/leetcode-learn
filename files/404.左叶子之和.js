/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (52.37%)
 * Likes:    101
 * Dislikes: 0
 * Total Accepted:    13K
 * Total Submissions: 24.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 * 
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
 * @return {number}
 */

var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  let sum = 0;
  const left = root.left;
  if (left && !left.left && !left.right) {
    sum += left.val;
  } else {
    sum += sumOfLeftLeaves(left);
  }

  sum += sumOfLeftLeaves(root.right);
  return sum;
};
// @lc code=end

