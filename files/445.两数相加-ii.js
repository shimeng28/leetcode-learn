/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 *
 * https://leetcode-cn.com/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (51.44%)
 * Likes:    94
 * Dislikes: 0
 * Total Accepted:    8.9K
 * Total Submissions: 17.2K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * 给定两个非空链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。
 * 
 * 
 * 
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 
 * 进阶:
 * 
 * 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
 * 
 * 示例:
 * 
 * 
 * 输入: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出: 7 -> 8 -> 0 -> 7
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
  const l1Stack = [];
  const l2Stack = [];
  while (l1) {
    l1Stack.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    l2Stack.push(l2.val);
    l2 = l2.next;
  }
  const sumStack = [];
  let carry = 0;
  while (l1Stack.length || l2Stack.length) {
    let num1 = 0;
    let num2 = 0;
    if (l1Stack.length) {
      num1 = l1Stack.pop();
    }

    if (l2Stack.length) {
      num2 = l2Stack.pop();
    }

    let sum = num1 + num2 + carry;
    carry = 0;
    if (sum >= 10) {
      sum %= 10;
      carry = 1;
    }
    sumStack.push(sum);
  }
  if (carry) sumStack.push(carry);

  let head = null;
  let curr = null;
  while (sumStack.length) {
    const newNode = new ListNode(sumStack.pop());
    
    if (!curr) {
      head = newNode;
      curr = head;
    } else {
      curr.next = newNode;
      curr = curr.next;
    }
  }

  return head;
};
// @lc code=end

// module.exports = addTwoNumbers;

