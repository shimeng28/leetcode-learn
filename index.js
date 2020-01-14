const combinationSum3 = require('./files/216.组合总和-iii');

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
    if (index > len - 1 || typeof arr[index] !== 'number') {
      return null;
    }
    const currNode = new TreeNode(arr[index]);
    currNode.left = _createTree(getLeftChildIndex(index));
    currNode.right = _createTree(getRightChildIndex(index));
    return currNode;
  }
  return _createTree(0);
};


const preOrder = (root) => {
  if (!root) return null;

  preOrder(root.left);
  preOrder(root.right);
  console.log(root.val);
};

// const str = [1, null, 2, 3];
// const tree = createTree(str);
const nums = [3,5,1,6,2,0,8,null,null,7,4];
const count = 1;
const tree = createTree(nums);

console.log(combinationSum3(3, 9));