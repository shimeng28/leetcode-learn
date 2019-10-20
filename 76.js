/**
 * 给你一个字符串 S、一个字符串 T，
 * 请在字符串 S 里面找出：包含 T 所有字母的最小子串。
 * 
 * 输入: S = "ADOBECODEBANC", T = "ABC"
 * 输出: "BANC"
 * 
 * 如果 S 中不存这样的子串，则返回空字符串 ""。
 * 如果 S 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let ret = '';
  const subStrLen = t.length
  const len = s.length;

  if (!s || !t || subStrLen > len) return ret;

  const subStrFreq = {};
  for (let i = 0; i < subStrLen; i++) {
    if (subStrFreq[t[i]]) subStrFreq[t[i]]++;
    else subStrFreq[t[i]] = 1;
  }

  let start = 0;
  let end = -1;
  let tLen = subStrLen;
  // [start, end]
  while (end < len - 1) {
    // 滑动窗口中缺少该字符
    if (subStrFreq[s[++end]] > 0) {
      tLen--;
    }

    if (typeof subStrFreq[s[end]] === 'number') {
      // 频率减1
      subStrFreq[s[end]]--;
    }

    // 包含所有的子串的时候
    while (tLen === 0) {
      // 更新返回值
      ret = (ret && ret.length < end + 1 - start) ? ret : s.slice(start, end + 1);

      // 开始增大start值
      // 当前start上的值属于子串的某个字符时
      if (subStrFreq[s[start]] === 0) {
        tLen++;
      }

      if (typeof subStrFreq[s[start]] === 'number') {
        subStrFreq[s[start]]++;
      }
      start++;
    }
  }

  return ret;
};

const S = "ADOBECODEBANC", T = "ABC";
console.log(minWindow(S, T));