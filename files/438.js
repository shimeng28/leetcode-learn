/**
 * 给定一个字符串 s 和一个非空字符串 p，
 * 找到 s 中所有是 p 的字母异位词的子串，
 * 返回这些子串的起始索引。
 * 
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 * 
 * 输入:
 * s: "cbaebabacd" p: "abc"
 * 输出:[0, 6]
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 * 
 * 输入: s: "abab" p: "ab"
 * 输出: [0, 1, 2]
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (!s) return [];
  const ret = [];
  const anagramsLen = p.length; 
  const anagramsFreqList = new Array(26).fill(0);
  const visitedFreqList = new Array(26).fill(0);
  const aCode = 'a'.charCodeAt(0);

  for (let i = 0; i < anagramsLen; i++) {
    anagramsFreqList[p.charCodeAt(i) - aCode]++;
  }

  // [i, j]
  let i = 0;
  let j = anagramsLen - 1;
  while (j < s.length) {
    visitedFreqList.fill(0);
    let start;
    for (start = i; start <= j; start++) {
      const index = s.charCodeAt(start) - aCode;
      if (!anagramsFreqList[index]) break;

      visitedFreqList[index]++;
      // 重复的字符个数大于p中的
      if (visitedFreqList[index] > anagramsFreqList[index]) break;
    }

    if (start === j + 1) {
      ret.push(i);
    }

    i++;
    j++;
  }

  return ret;
};

const s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s, p));