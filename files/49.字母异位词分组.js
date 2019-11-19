/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (58.77%)
 * Likes:    206
 * Dislikes: 0
 * Total Accepted:    35.3K
 * Total Submissions: 59.7K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const len = strs.length;
  const result = [];
  if (!len) result;
  // 字母从a-z的值依次
  const hashList = [
    2, 3, 5, 7, 11, 
    13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 
    53, 59, 61, 67, 71, 
    73, 79, 83, 89, 97, 
    101
  ];
  const alphaMap = new Map();
  for (let i = 0; i < len; i++) {
    const currStr = strs[i];
    let result = 1;
    for (let j = 0; j < currStr.length; j++) {
      result *= hashList[currStr.charCodeAt(j) - 97];
    }
    let list = alphaMap.get(result);
    if (typeof list === 'undefined') list = [];
    list.push(currStr);
    alphaMap.set(result, list);
  }

  for (let [key, value] of alphaMap) {
    result.push(value)
  }
  return result;
};


// const alpha = ["hug","jug"];
// console.log(groupAnagrams(alpha));
// @lc code=end

