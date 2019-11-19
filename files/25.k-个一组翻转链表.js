/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (54.83%)
 * Likes:    297
 * Dislikes: 0
 * Total Accepted:    27.3K
 * Total Submissions: 49.7K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 示例 :
 * 
 * 给定这个链表：1->2->3->4->5
 * 
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 * 
 * 说明 :
 * 
 * 
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let prev = null;
  let curr = head;
  while (curr) {
    let count = k;
    let innerPrev = null; 
    let innerCurr = curr; 
    let innerNext = null;  
    let isEnd = false;                                                                
    while (count > 0 && !isEnd) {
      if (!innerCurr) {
        isEnd = true;
        continue;
      }
      innerNext = innerCurr.next;
      innerCurr.next = innerPrev;
      innerPrev = innerCurr
      innerCurr = innerNext;
      count--;
    }
    while (isEnd && innerPrev !== curr) {
      const cbPrev = innerPrev.next;
      innerPrev.next = innerCurr;
      innerCurr = innerPrev;
      innerPrev = cbPrev;
    }
    if (isEnd) {
      innerPrev.next = innerCurr;
      break;
    };
    curr.next = innerCurr;
    if (!prev) {
      head = innerPrev;
    } else {
      prev.next = innerPrev;
    }

    prev = curr;
    curr = innerCurr;
  }
  return head;
};
// @lc code=end

// module.exports = reverseKGroup;

