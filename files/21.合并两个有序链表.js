/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (57.85%)
 * Likes:    707
 * Dislikes: 0
 * Total Accepted:    138.9K
 * Total Submissions: 238.4K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = null;
  let curr = head;
  let l1Node = l1;
  let l2Node = l2;
  while (l1Node || l2Node) {
    let tmpNode = null;
    if (!l1Node) {
      tmpNode = l2Node;
      l2Node = l2Node.next;
    } else if (!l2Node) {
      tmpNode = l1Node;
      l1Node = l1Node.next;
    } else {
      if (l1Node.val > l2Node.val) {
        tmpNode = l2Node;
        l2Node = l2Node.next;
      } else {
        tmpNode = l1Node;
        l1Node = l1Node.next;
      }
    }

    if (!head) {
      head = tmpNode;
      curr = tmpNode;
    } else {
      curr.next = tmpNode;
      curr = curr.next;
    }
  }

  return head;
};
// @lc code=end

// module.exports = mergeTwoLists;

