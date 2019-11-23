/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const len = path.length;
  const stack = [];
  let prevContent = '';

  for (let i = 0; i < len; i++) {
    if (path[i] === '/') {
      if (prevContent) {
        stack.push(prevContent);
        prevContent = '';
      }
    } else {
      prevContent += path[i];
    }
  }
  if (prevContent) {
    stack.push(prevContent);
  }
  let index = 0;
  while (index < stack.length) {
    const currVal = stack[index];
    switch(currVal) {
      case '.':
        stack.splice(index, 1);
        break;
      case '..':
        if (!index) {
          stack.splice(index, 1);
        } else {
          stack.splice(--index, 2);
        }
        break;
      default:
        index++;
    }
  }
  // console.log(stack);
  return `/${stack.join('/')}`;
};
// @lc code=end

module.exports = simplifyPath;
