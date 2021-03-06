/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 *
 * algorithms
 * Easy (60.80%)
 * Likes:    194
 * Dislikes: 0
 * Total Accepted:    30.4K
 * Total Submissions: 49.7K
 * Testcase Example:  '[6,2,8,0,4,7,9,null,null,3,5]\n2\n8'
 *
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 
 * 例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]
 * 
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * 输出: 6 
 * 解释: 节点 2 和节点 8 的最近公共祖先是 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * 输出: 2
 * 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 所有节点的值都是唯一的。
 * p、q 为不同节点且均存在于给定的二叉搜索树中。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const getAncestor = (node, pNum, qNum, ancestorNode) => {
  if (!node) return;

  const val = node.val;
  if (val > pNum && val > qNum) {
    return getAncestor(node.left, pNum, qNum, ancestorNode);
  } else if (val < pNum && val < qNum) {
    return getAncestor(node.right, pNum, qNum, ancestorNode);
  } else if (node.left || node.right) {
    ancestorNode.val = val;
    return;
  }
};

var lowestCommonAncestor1 = function(root, p, q) {
  if (!root) return 0;
  const ancestorNode = new TreeNode(null);
  getAncestor(root, p.val, q.val, ancestorNode);
  return ancestorNode;
};

var lowestCommonAncestor = function(root, p, q) {
  const pVal = p.val;
  const qVal = q.val;
  let currNode = root;
  while (currNode) {
    const currVal = currNode.val;

    if (currVal > pVal && currVal > qVal) {
      currNode = currNode.left;
    } else if (currVal < pVal && currVal < qVal ) {
      currNode = currNode.right;
    } else {
      return currNode;
    }
  }

  return null;
}

module.exports = lowestCommonAncestor;
// @lc code=end

