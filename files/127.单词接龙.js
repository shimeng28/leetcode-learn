/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 *
 * https://leetcode-cn.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (37.14%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    15.1K
 * Total Submissions: 39.8K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord
 * 的最短转换序列的长度。转换需遵循如下规则：
 * 
 * 
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 如果不存在这样的转换序列，返回 0。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * 输出: 5
 * 
 * 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * ⁠    返回它的长度 5。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * 输出: 0
 * 
 * 解释: endWord "cog" 不在字典中，所以无法进行转换。
 * 
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const univerWordMap = new Map();
  const len = wordList.length;
  const wordLen = beginWord.length;
  for (let i = 0; i < len; i++) {
    const currWord = wordList[i];
    for (let j = 0; j < wordLen; j++) {
      const univerWord = currWord.slice(0, j) + '*' + currWord.slice(j + 1);
      let mapVal = univerWordMap.get(univerWord);
      if (typeof mapVal === 'undefined') {
        mapVal = [];
      }
      mapVal.push(currWord);
      univerWordMap.set(univerWord, mapVal);
    }
  }
  const queue = [];
  const visitedSet = new Set();
  queue.push([beginWord, 1]);
  while (queue.length) {
    const [ currWord, currLevel ] = queue.shift();
    for (let i = 0; i < wordLen; i++) {
      const univerWord = currWord.slice(0, i) + '*' + currWord.slice(i + 1);
      const mapVal = univerWordMap.get(univerWord);
      if (!mapVal) continue;
      for (let k = 0; k < mapVal.length; k++) {
        if (mapVal[k] === endWord) {
          return currLevel + 1;
        } else if (!visitedSet.has(mapVal[k])) {
          queue.push([mapVal[k], currLevel + 1]);
          visitedSet.add(mapVal[k]);
        }
      }
    }
  }

  return 0;
};
// @lc code=end

// module.exports = ladderLength;

