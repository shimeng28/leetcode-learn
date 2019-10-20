/**
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  const ret = [];

  while (i < j) {
    const currSum = numbers[i] + numbers[j];
    if (currSum > target) j--;
    else if (currSum < target) i++;
    else {
      ret.push(i + 1);
      ret.push(j + 1);
      break;
    }
  }
  return ret;
};

const numbers = [2, 7, 11, 15], target = 9;
console.log(twoSum(numbers, target));