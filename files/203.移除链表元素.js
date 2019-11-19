/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (42.67%)
 * Likes:    306
 * Dislikes: 0
 * Total Accepted:    46K
 * Total Submissions: 107.5K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let curr = head;
  let prev = null;
  while (curr) {
    if (curr.val === val) {
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

// module.exports = removeElements;

