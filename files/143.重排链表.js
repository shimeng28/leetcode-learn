/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (52.46%)
 * Likes:    127
 * Dislikes: 0
 * Total Accepted:    11.2K
 * Total Submissions: 21.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例 1:
 * 
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 * 
 * 示例 2:
 * 
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) return head;

  let slow = head;
  let prev = null;
  let fast = head;
  // 快慢指针 分割链表
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  } 
  if (!prev) {
    return head;
  }

  // 分割节点
  prev.next = null;

  // 反转后半部份链表
  prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // 将后半部份节点插入到前半部分
  let insertHead = prev;
  let restartHead = head;
  while (restartHead) {
    const next = restartHead.next;
    const insertNext = insertHead.next;
    restartHead.next = insertHead;
    // 如果此时前半部分没有节点了，后半部分的保留
    if (next) {
      insertHead.next = next;
    }
    restartHead = next;
    insertHead = insertNext;
  }

  return head;
};
// @lc code=end

// module.exports = reorderList;

