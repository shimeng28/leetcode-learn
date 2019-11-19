/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 我们将空字符串定义为有效的回文串。
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 输入: "race a car"
 * 输出: false
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  let result = true;

  while (start < end) {
    const isValidChar = /[a-z0-9]/i;
    const val1 = s.charAt(start);
    const val2 = s.charAt(end);

    if (!isValidChar.test(val1)) {
      start++;
      continue;
    }

    if (!isValidChar.test(val2)) {
      end--;
      continue;
    }

    if (val1.toLowerCase() !== val2.toLowerCase()) {
      result = false;
      break;
    }
    start++;
    end--;
  }
  return result;
};

const s = "race a car";
console.log('isPalindrome...', isPalindrome(s));