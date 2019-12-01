/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 *
 * https://leetcode-cn.com/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Medium (61.27%)
 * Likes:    94
 * Dislikes: 0
 * Total Accepted:    10.4K
 * Total Submissions: 16.4K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * 给出一个完全二叉树，求出该树的节点个数。
 * 
 * 说明：
 * 
 * 
 * 完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第
 * h 层，则该层包含 1~ 2^h 个节点。
 * 
 * 示例:
 * 
 * 输入: 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠/ \  /
 * 4  5 6
 * 
 * 输出: 6
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
var countNodes1 = function(root) {
  let count = 0;
  if (!root) return count;
  const queue = []; 
  queue.push(root);
  while (queue.length) {
    count++;
    const currNode = queue.shift();
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return count;
};

var countNodes2 = function(root) {
  if (!root) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
}

const countLevel = (node) => {
  let level = 0;
  if (!node) return level;
  while (node) {
    level++;
    node = node.left;
  }
  return level;
}
var countNodes = function(root) {
  if (!root) return 0;
  const leftLevel = countLevel(root.left);
  const rightLevel = countLevel(root.right);

  if (leftLevel === rightLevel) {
    return countNodes(root.right) + (1 << leftLevel);
  } else {
    return countNodes(root.left) + (1 << rightLevel)
  }
}
// @lc code=end

