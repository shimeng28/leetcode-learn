/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 *
 * https://leetcode-cn.com/problems/word-ladder-ii/description/
 *
 * algorithms
 * Hard (28.62%)
 * Likes:    86
 * Dislikes: 0
 * Total Accepted:    4.2K
 * Total Submissions: 14K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord
 * 的最短转换序列。转换需遵循如下规则：
 * 
 * 
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 如果不存在这样的转换序列，返回一个空列表。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * 输出:
 * [
 * ⁠ ["hit","hot","dot","dog","cog"],
 * ["hit","hot","lot","log","cog"]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * 输出: []
 * 
 * 解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。
 * 
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
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
  const result = [];
  const trace = new Map();
  const visitedMap = new Map();
  queue.push([beginWord, 1]);
  while (queue.length) {
    const [ currWord, currLevel ] = queue.shift();
    for (let i = 0; i < wordLen; i++) {
      const univerWord = currWord.slice(0, i) + '*' + currWord.slice(i + 1);
      const mapVal = univerWordMap.get(univerWord);
      if (!mapVal) continue;
      for (let k = 0; k < mapVal.length; k++) {
        if (mapVal[k] === endWord) {
          if (result.indexOf(currWord) !== -1) continue;
          result.push(currWord);
        } else if (mapVal[k] === beginWord || mapVal[k] === currWord) {
          continue;
        } else if (!visitedMap.has(mapVal[k])) {
          trace.set(mapVal[k], [ currWord ]);
          queue.push([mapVal[k], currLevel + 1]);
          visitedMap.set(mapVal[k], currLevel + 1);
        } else if (visitedMap.get(mapVal[k]) === currLevel + 1) {
          const traceList = trace.get(mapVal[k]);
          queue.push([mapVal[k], currLevel + 1]);
          traceList.push(currWord);
          trace.set(mapVal[k], traceList)
        }
      }
    }
  }

  const dps = (node) => {
    if (node === beginWord) return [ beginWord ];
    const traceList = trace.get(node);
    let list = [];
    for (let i = 0; i < traceList.length; i++) {
      const val = dps(traceList[i]);

      for (let j = 0; j < val.length; j++) {
        if (typeof val[i] !== 'object') {
          val.push(node);
          if (traceList.length === 1) {
            list = val;
          } else {
            list.push(val);
          }
          break;
        } else {
          val[j].push(node);
          list.push(val);
        }
      }
    }

    return list;
  }

  if (!result.length) return result;

  let tmpRes = [];
  for (let i = 0; i < result.length; i++) {
    const currNode = result[i];
  
    const list = dps(currNode, tmpRes);
    if (typeof list[0] !== 'object') {
      list.push(endWord)
      tmpRes.push(list)
    } else {
      list.forEach(item => item.push(endWord));
      [].push.apply(tmpRes, list);
    }
  }

  return tmpRes;
};
// @lc code=end


// module.exports = findLadders;

// ["red","ted","tad","tax"]
// ["red","ted","tex","tax"]
// ["red","rex","tex","tax"]