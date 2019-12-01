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
const getListCount = (head) => {
  let count = 0;
  let curr = head;
  while (curr) {
    count++;
    curr = curr.next;
  }
  
  return count;
};
const sliceNode = (head, count) => {
  let curr = head;
  while (curr && --count) {
    curr = curr.next;
  }
  
  // 此时剩余的节点数不够count大小，直接返回为null，表明本轮拆分结束
  if (!curr) {
    return null;
  }
  
  // 返回截断后的下一个节点
  const res = curr.next;
  curr.next = null;
  return res;
};
const merge = (head1, head2) => {
  const dummyNode = new ListNode(0);
  let curr = dummyNode;
  while (head1 || head2) {
    if (!head1) {
      curr.next = head2;
      head2 = head2.next;
    } else if (!head2) {
      curr.next = head1;
      head1 = head1.next;
    } else if (head1.val < head2.val) {
      curr.next = head1;
      head1 = head1.next;
    } else {
      curr.next = head2;
      head2 = head2.next;
    }
    
    curr = curr.next;
    curr.next = null;
  }
  
  const res = dummyNode.next;
  dummyNode.next = null;
  return res;
};
var sortList = function(head) {
  const count = getListCount(head);
  const dummyNode = new ListNode(0);
  dummyNode.next = head;

  for (let size = 1; size < count; size += size) {
    let curr = dummyNode.next;
    let prev = dummyNode;
    
    while (curr) {
      const left = curr;
      const right = sliceNode(left, size);
      curr = sliceNode(right, size);
      
      prev.next = merge(left, right);
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

module.exports = sortList;

