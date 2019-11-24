/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (52.32%)
 * Likes:    115
 * Dislikes: 0
 * Total Accepted:    23.4K
 * Total Submissions: 44.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回锯齿形层次遍历如下：
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
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
var zigzagLevelOrder = function(root) {
  const result = [];
  if (!root) return result;

  const queue = [];
  queue.push(root);

  let levelSize = 0;
  while (queue.length) {
    levelSize++;
    const levelRes = [];
    let size = queue.length;
    while (size > 0) {
      const currNode = queue.shift();
      if (levelSize % 2) {
        // 1 3 5顺序存储
        levelRes.push(currNode.val);
      } else {
        // 2 4 6逆序存储
        levelRes.unshift(currNode.val);
      }

      if (currNode.left) {
        queue.push(currNode.left);
      }

      if (currNode.right) {
        queue.push(currNode.right);
      }
      size--;
    }
    result.push(levelRes);
  }

  return result;
};
// @lc code=end

