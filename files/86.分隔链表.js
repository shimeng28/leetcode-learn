/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode-cn.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (53.35%)
 * Likes:    131
 * Dislikes: 0
 * Total Accepted:    18.5K
 * Total Submissions: 34.5K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 
 * 示例:
 * 
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var partition = function(head, x) {
  let below = new ListNode(0);
  let belowHead = below;
  let above = new ListNode(0);
  let aboveHead = above;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = null;
    if (curr.val >= x) {
      above.next = curr;
      above = above.next;
    } else {
      below.next = curr;
      below = below.next;
    }
    curr = next;
  }
  below.next = aboveHead.next;
  return belowHead.next;
};
// @lc code=end

// module.exports = partition;

