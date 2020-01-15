/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (45.10%)
 * Likes:    166
 * Dislikes: 0
 * Total Accepted:    20K
 * Total Submissions: 44.3K
 * Testcase Example:  '"25525511135"'
 *
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 
 * 示例:
 * 
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
function splitIp(ipStr, start, dotCount, currIp, result) {
  // [start, end)是否符合
  const maxEnd = Math.min(start + 3, ipStr.length);
  for (let end = start + 1; end <= maxEnd; end++) {
    const currStr = ipStr.slice(start, end);

    // 该子串以0开头，但是子串长度大于1位 如012，不符合
    if (currStr.charAt(0) === '0' && (end - start) > 1) return;

    // 子串数值大于255
    if (Number(currStr) > 255) return;

    // 最后一个子串没有将剩余的字符用完
    if (dotCount < 1 && (end !== ipStr.length)) continue;
    let subIps = '';
    if (dotCount === 3) {
      subIps = currStr;
    } else {
      subIps = `${currIp}.${currStr}`;
    }
    if (dotCount === 0) {
      result.push(subIps);
      return;
    }
    splitIp(ipStr, end, dotCount - 1, subIps, result);
  }
}
var restoreIpAddresses = function(s) {
  const ipList = [];
  splitIp(s, 0, 3, '', ipList);
  return ipList;
};
// @lc code=end

// module.exports = restoreIpAddresses;

