/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 *
 * https://leetcode-cn.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (40.82%)
 * Likes:    106
 * Dislikes: 0
 * Total Accepted:    12.9K
 * Total Submissions: 31.6K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * 
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 * 
 * 示例1:
 * 
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:pattern = "abba", str = "dog cat cat fish"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: pattern = "aaaa", str = "dog cat cat dog"
 * 输出: false
 * 
 * 示例 4:
 * 
 * 输入: pattern = "abba", str = "dog dog dog dog"
 * 输出: false
 * 
 * 说明:
 * 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    
 * 
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const strList = str.split(' ');
  const connectMap = new Map();
  const hasConnectSet = new Set();

  let result = true;
  let i;
  for (i = 0; i < pattern.length && result; i++) {
    const pToStr = connectMap.get(pattern[i]);
    if (typeof pToStr === 'undefined') {
      if (hasConnectSet.has(strList[i])) {
        result = false;
      } else {
        connectMap.set(pattern[i], strList[i]);
        hasConnectSet.add(strList[i]);
      }
    } else if (pToStr !== strList[i]) {
      result = false;
    }
  }

  if (i !== strList.length) {
    result = false;
  }

  return result;
};

// const p = "abba";
// const str = "dog dog dog dog";
// console.log(wordPattern(p, str));
// @lc code=end

