/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (39.17%)
 * Likes:    172
 * Dislikes: 0
 * Total Accepted:    32.5K
 * Total Submissions: 82.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 * 
 * 
 * 示例 2:
 * 
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight1 = function(head, k) {
  if (k < 0) {
    throw new Error('k 为非负数');
  }

  if (!head || !k) return head;

  let ahead = head;
  let last = head;
  while (k--) {
    if (!ahead) {
      ahead = head;
    }
    ahead = ahead.next;
  }

  let tail = null;
  let joint = null;
  while (ahead) {
    joint = ahead;
    ahead = ahead.next;
    tail = last;
    last = last.next;
  }

  if (tail) {
    joint.next = head;
    tail.next = null;
    head = last;
  }
  return head;
};

var rotateRight = function(head, k) {
  let curr = head;
  let last = null;
  let count = 0;
  while (curr) {
    count++;
    last = curr;
    curr = curr.next;
  }

  if (!count) {
    return head;
  }

  const actual = k % count;
  last.next = head;
  curr = head;
  for (let i = 1; i < count - actual; i++) {
    curr = curr.next;
  }

  head = curr.next;
  curr.next = null;

  return head;
}
// @lc code=end

