/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (47.97%)
 * Likes:    222
 * Dislikes: 0
 * Total Accepted:    55.5K
 * Total Submissions: 115K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const visitedSet = new Set();
  let prev = null;
  let curr = head;

  while (curr) {
    const nodeVal = curr.val;
    if (visitedSet.has(nodeVal)) {
      prev.next = curr.next;
    } else {
      visitedSet.add(nodeVal);
      prev = curr;
    }
    curr = curr.next;
  }

  return head;
};
// @lc code=end

