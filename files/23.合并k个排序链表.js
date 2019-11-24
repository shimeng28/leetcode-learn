/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (47.68%)
 * Likes:    397
 * Dislikes: 0
 * Total Accepted:    57.1K
 * Total Submissions: 119.1K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const _merge = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  const dummyHead = new ListNode(0);
  let curr = dummyHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (!l1) {
    curr.next = l2;
  } else {
    curr.next = l1;
  }

  return dummyHead.next;
}
const merge = (list, left, right) => {
  if (left >= right) return list[left];

  const mid = parseInt((right - left) / 2) + left;
  const l1 = merge(list, left, mid);
  const l2 = merge(list, mid + 1, right);
  return _merge(l1, l2);
}
var mergeKLists = function(lists) {
  if (!lists.length) return null;
  return merge(lists, 0, lists.length - 1);
};
// @lc code=end

// module.exports = mergeKLists;

