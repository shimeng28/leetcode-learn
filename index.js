const lowestCommonAncestor = require('./files/235.二叉搜索树的最近公共祖先');

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
  const TreeNode = function (val) {
    this.val = val;
    this.left = this.right = null;
  }

  const _createTree = (list, val) => {
    if (typeof val !== 'number') {
      return null;
    }
    const currNode = new TreeNode(val);
    const leftVal = list.shift();
    const rightVal = list.shift();
    currNode.left = _createTree(list, leftVal);
    currNode.right = _createTree(list, rightVal);
    return currNode;
  }
  const nodeVal = arr.shift();
  return _createTree(arr, nodeVal);
};




// const str = [1, null, 2, 3];
// const tree = createTree(str);
const nums = [3,1,4,null,2];
// const count = -5;
const tree = createTree(nums);
console.log(lowestCommonAncestor(tree, { val: 2 }, { val: 3 }));