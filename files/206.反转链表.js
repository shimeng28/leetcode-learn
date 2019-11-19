/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (65.14%)
 * Likes:    640
 * Dislikes: 0
 * Total Accepted:    118.6K
 * Total Submissions: 181.2K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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

/**
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

  var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
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
    const arr = [1, 2, 3, 4, 5];
    const listHeader = createList(arr);
    displayList(listHeader);
    displayList(reverseList(listHeader));
  }
  test();
**/


// @lc code=end

