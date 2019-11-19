/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (62.40%)
 * Likes:    320
 * Dislikes: 0
 * Total Accepted:    29.7K
 * Total Submissions: 47.5K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 * 
 * 示例 1:
 * 
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 
 * 示例 2:
 * 
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
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
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function cutNodes(node, size) {
  let curr = node;
  while (curr && --size) {
    curr = curr.next;
  }
  if (!curr) return null;

  const res = curr.next;
  curr.next = null;
  return res;
}

function merge(node1, node2) {
  const dummyNode = new ListNode(0);
  let curr = dummyNode;
  while (node1 || node2) {
    if (!node1) {
      curr.next = node2;
      node2 = node2.next;
    } else if (!node2) {
      curr.next = node1;
      node1 = node1.next;
    } else if (node1.val <= node2.val) {
      curr.next = node1;
      node1 = node1.next;
    } else {
      curr.next = node2;
      node2 = node2.next;
    }

    curr = curr.next;
    curr.next = null;
  }
  const res = dummyNode.next;
  dummyNode.next = null;
  return res;
}

var sortList = function(head) {
  let curr = head;
  let count = 0;
  while (curr) {
    curr = curr.next;
    count++;
  }
  const dummyNode = new ListNode(0);
  dummyNode.next = head;

  for (let size = 1; size < count; size += size) {
    let curr = dummyNode.next;
    let prev = dummyNode;

    while (curr) {
      let left = curr;
      let right = cutNodes(left, size);
      curr = cutNodes(right, size);

      prev.next = merge(left, right);
      // 将prev移动到最后
      while (prev.next) {
        prev = prev.next;
      }
    }
  }

  const res = dummyNode.next;
  dummyNode.next = null;
  return res;
};
// @lc code=end

// module.exports = sortList;

