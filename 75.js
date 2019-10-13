/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，
 * 原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 不能使用代码库中的排序函数来解决这道题。
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 * 
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var sortColors = function(nums) {
  const len = nums.length;
  let zeroFlag = 0;
  let twoFlag = len - 1;

  for (let i = 0; i <= twoFlag; ) {
    const val = nums[i];
    if (!(val >= 0 && val <= 2)) throw new Error('入参nums 元素范围只能在0-2之间');
  
    if (nums[i] === 2) {
      swap(nums, i, twoFlag--);                          
    } else if (nums[i] === 0) {
      swap(nums, zeroFlag++, i++);
    } else {
      i++;
    }
  }

  return nums;
};

const nums = [2,0,1];
console.log(sortColors(nums));