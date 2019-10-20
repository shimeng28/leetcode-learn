/**
 * @param {string} s
 * @return {string}
 */
const isVowel = (val) => {
  return val === 'a' 
    || val === 'e'
    || val === 'i'
    || val === 'o'
    || val === 'u';
};
var reverseVowels = function(s) {
  const list = s.split('');
  let start = 0;
  let end = s.length - 1;
  
  while (start < end) {
    const val1 = list[start].toLowerCase();
    const val2 = list[end].toLowerCase();
    
    if (!isVowel(val1)) {
      start++;
      continue;
    }
    
    if (!isVowel(val2)) {
      end--;
      continue;
    }
    
    const tmp = list[start];
    list[start++] = list[end];
    list[end--] = tmp;
  }
  
  return list.join('');
};

const val = 'hello';
console.log(reverseVowels(val));