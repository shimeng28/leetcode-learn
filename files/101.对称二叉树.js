/*
 * @lc app=leetcode.cn id=101 lang=javascript
 * 
 * [101] 对称二叉树
 * 
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 * 
 * algorithms
 * Easy (48.82%)
 * Likes:    520
 * Dislikes: 0
 * Total Accepted:    73.1K
 * Total Submissions: 148.8K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 * 
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  
  return isMirro(root, root);
};
const isMirro = (node1, node2) => {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;

  if (node1.val != node2.val) return false;

  return isMirro(node1.left, node2.right) && isMirro(node1.right, node2.left);
}
// @lc code=end

