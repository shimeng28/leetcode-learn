/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (39.86%)
 * Likes:    1188
 * Dislikes: 0
 * Total Accepted:    155.4K
 * Total Submissions: 388K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isLeft = (val) => val === '(' || val === '{' || val === '[';
const isPair = (val, other) => {
  let result = false;
  switch(val) {
    case '(':
      result = other === ')';
      break;
    case '{':
      result = other === '}';
      break;
    case '[':
      result = other === ']';
    break;
  }

  return result;
};
var isValid = function(s) {
  const stack = [];
  const len = s.length;
  let result = true;
  for (let i = 0; i < len && result; i++) {
    if (isLeft(s[i])) {
      stack.push(s[i]);
    } else {
      const top = stack.pop();
      if (!top || !isPair(top, s[i])) {
        result = false;
      }
    }
  }

  if (result && stack.length) {
    result = false;
  }

  return result;
};
// @lc code=end


// module.exports = isValid;