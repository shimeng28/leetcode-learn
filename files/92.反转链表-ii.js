/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (47.63%)
 * Likes:    242
 * Dislikes: 0
 * Total Accepted:    24.9K
 * Total Submissions: 52.1K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 * 
 */
// 1 2 3 4 5
// 1 3 2 4 5
// 1 3 
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */



var reverseBetween1 = function(head, m, n) {
  if (!head) return head;

  let startPrev = null;
  let start = head;
  let count = n - m;
  while (start !== null && m > 1) {
    startPrev = start;
    start = start.next;
    m--;
  }

  let prev = null;
  let curr = start;
  let next = null;

  while (curr !== null && count > 0) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count--;
  }


  start.next = curr.next;
  if (prev) {
    curr.next = prev;
  }

  // 头节点未被反转
   if (startPrev) {
    startPrev.next = curr;
  } else {
    // 头节点也被反转
    head = curr;
  }

  return head;
};
var reverseBetween = function(head, m, n) {
  let prev = null;
  let curr = head;
  let count = n - m + 1;
  while (curr !== null && --m) {
    prev = curr;
    curr = curr.next;
  }
  const reverHead = prev;
  const reverTail = curr;
  let next = null;
  while (curr && count--) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // 如果从第一个节点开始反转
  if (!reverHead) {
    head = prev;
  } else {
    reverHead.next = prev;
  }

  reverTail.next = curr;

  return head;
}

const createList = (arr) => {
  const len = arr.length;
  if (!len) return null;
  let header = {
    val: arr[0],
    next: null,
  };
  let prev = header;
  for (let i = 1; i < len; i++) {
    const newNode = {
      val: arr[i],
      next: null
    };
    prev.next = newNode;
    prev = newNode;
  }
  return header;
};

const displayList = (header) => {
  let curr = header;
  let result = '';
  while (curr !== null) {
    result += `${curr.val} => `;
    curr = curr.next;
  }
  result = `${result}NULL`;
  console.log(result);
};
const test = () => {
  const arr = [3, 5];
  const listHeader = createList(arr);
  displayList(listHeader);
  displayList(reverseBetween(listHeader, 1, 1));
}
// test();

// @lc code=end

