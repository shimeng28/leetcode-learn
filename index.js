const sortedArrayToBST = require('./files/108.将有序数组转换为二叉搜索树');

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

const createTree = (arr) => {
  const len = arr.length;
  const TreeNode = function (val) {
    this.val = val;
    this.left = this.right = null;
  }

  const getLeftChildIndex = (n) => 2 * n + 1;

  const getRightChildIndex = (n) => 2 * n + 2;

  const _createTree = (index) => {
    if (index > len - 1) {
      return null;
    }
    const currNode = new TreeNode(arr[index]);
    currNode.left = _createTree(getLeftChildIndex(index));
    currNode.right = _createTree(getRightChildIndex(index));
    return currNode;
  }
  return _createTree(0);
};




// const str = [1, null, 2, 3];
// const tree = createTree(str);
const nums = [-10,-3,0,5,9];
const count = 3;
const tree = createTree(nums);
console.log(sortedArrayToBST(nums));