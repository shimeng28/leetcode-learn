/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (35.87%)
 * Likes:    3403
 * Dislikes: 0
 * Total Accepted:    255.8K
 * Total Submissions: 710.2K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let num1 = l1;
  let num2 = l2;

  let head = new ListNode();
  let prev = null;
  let newList = head;
  while (num1 || num2) {
    const val1 = num1 ? num1.val : 0;
    const val2 = num2 ? num2.val : 0;

    let sum = val1 + val2 + carry;
    carry = 0;
    if (sum >= 10) {
      sum = sum % 10;
      carry = 1;
    }

    if (num1) {
      num1 = num1.next;
    }
    if (num2) {
      num2 = num2.next;
    }
    
    newList.val = sum;
    newList.next = new ListNode();
    prev = newList;
    newList = newList.next;
  }

  if (carry) {
    newList.val = carry;
  } else {
    prev.next = null;
  }

  
  if (typeof head.val === 'undefined') return null;
  return head;
};
// @lc code=end
// module.exports = addTwoNumbers;