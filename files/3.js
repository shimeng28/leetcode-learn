/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: "abcabcbb"
 * 输出: 3 
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function(s) {
  const hasCharMap = {};
  const len = s.length;
  let currLen = 0;
  let start = 0;
  let end = 0;
  while (end < len) {
    const currChar = s[end];
    if (!hasCharMap[currChar]) {
      hasCharMap[currChar] = true;
      end++;
      currLen = currLen > (end - start) ? currLen : (end - start);
    } else {
      while (s[start] !== currChar) {
        delete hasCharMap[s[start++]];
      }
      start++;
      end++;
    }
  }

  return currLen;
};

var lengthOfLongestSubstring = function(s) {
  const hasCharMap = {};
  const len = s.length;
  let start = 0;
  let end = -1;
  let maxLen = 0;

  while (start < len) {
    if (end + 1 < len && !hasCharMap[s[end + 1]]) {
      hasCharMap[s[++end]] = true;
    } else {
      hasCharMap[s[start++]] = false;
    }

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      console.log(s.slice(start, end + 1));
    }
  }
  
  return maxLen;
};


const str = "bbbbb";
console.log(lengthOfLongestSubstring(str));