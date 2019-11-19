/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (44.34%)
 * Likes:    166
 * Dislikes: 0
 * Total Accepted:    23.7K
 * Total Submissions: 53.3K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const visitedNode = new Set();
  const duplicateNodeSet = new Set();
  let curr = head;
  while (curr) {
    const val = curr.val;
    if (visitedNode.has(val)) {
      duplicateNodeSet.add(val);
    } else {
      visitedNode.add(val);
    }
    curr = curr.next;
  } 

  curr = head;
  let prev = null;
  while (curr) {
    const val = curr.val;
    // 当前节点为重复节点
    if (duplicateNodeSet.has(val)) {
      if (!prev) {
        head = curr.next;
      } else {
        prev.next = curr.next;
      }
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return head;
};
// @lc code=end

// module.exports = deleteDuplicates;

