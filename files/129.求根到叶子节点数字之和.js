/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 *
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/description/
 *
 * algorithms
 * Medium (59.70%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    13.5K
 * Total Submissions: 22.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
 * 
 * 例如，从根到叶子节点路径 1->2->3 代表数字 123。
 * 
 * 计算从根到叶子节点生成的所有数字之和。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * 输出: 25
 * 解释:
 * 从根到叶子节点路径 1->2 代表数字 12.
 * 从根到叶子节点路径 1->3 代表数字 13.
 * 因此，数字总和 = 12 + 13 = 25.
 * 
 * 示例 2:
 * 
 * 输入: [4,9,0,5,1]
 * ⁠   4
 * ⁠  / \
 * ⁠ 9   0
 * / \
 * 5   1
 * 输出: 1026
 * 解释:
 * 从根到叶子节点路径 4->9->5 代表数字 495.
 * 从根到叶子节点路径 4->9->1 代表数字 491.
 * 从根到叶子节点路径 4->0 代表数字 40.
 * 因此，数字总和 = 495 + 491 + 40 = 1026.
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
const traverTree = (node, currList, allList) => {
  currList.push(node.val);
  // 到达叶子节点
  if (!node.left && !node.right) {
    allList.push(currList);
    return;
  }

  if (node.left) {
    traverTree(node.left, currList.slice(0), allList);
  }

  if (node.right) {
    traverTree(node.right, currList.slice(0), allList);
  }
};

const getSum = (allList) => {
  const sum = allList.reduce((total, itemList) => {
    const len = itemList.length;
    let currTotal = 0;
    itemList.forEach((item, index) => {
      currTotal += item * Math.pow(10, len - 1 - index);
    });
    total += currTotal;
    return total;
  }, 0);
  return sum;
}
var sumNumbers1 = function(root) {
  if (!root) return 0;
  const allList = [];
  traverTree(root, [], allList);
  return getSum(allList);
};
const dfs = (node, exp, total) => {
  if (!node) return null;
  exp = exp * 10 + node.val;
  if (!node.left && !node.right) {
    total.count = total.count + exp;
    return;
  }

  dfs(node.left, exp, total);
  dfs(node.right, exp, total);
}

var sumNumbers = function (root) {
  let ret = { count: 0 };
  dfs(root, 0, ret);
  return ret.count;
}
// @lc code=end

// module.exports = sumNumbers;