/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (38.99%)
 * Likes:    307
 * Dislikes: 0
 * Total Accepted:    47.1K
 * Total Submissions: 120.4K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // 只有一个节点
  if (!prev) return true;

  prev.next = null;

  prev = null;
  while(slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  let curr = head;
  while (curr && prev) {
    if (curr.val !== prev.val) {
      return false;
    }
    curr = curr.next;
    prev = prev.next;
  }
  return true;
};
// @lc code=end

// module.exports = isPalindrome;

