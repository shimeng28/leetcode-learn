/**
 * 在未排序的数组中找到第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 * 
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const partition = (arr, left, right) => {
  if (left >= right) return left;
  let pivotIndex = left;
  const pivot = arr[pivotIndex];

  for (let i = left + 1; i <= right; i++) {
    if (arr[i] > pivot) {
      pivotIndex++;

      const tmp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = tmp;
    }
  }

  const tmp = arr[left];
  arr[left] = arr[pivotIndex];
  arr[pivotIndex] = tmp;
  return pivotIndex;
};

const quickSort = (arr, left, right, index) => {
  const p = partition(arr, left, right);
  if (p === index) return arr[p];
  if (p > index) return quickSort(arr, left, p - 1, index);
  return quickSort(arr, p + 1, right, index);
};

var findKthLargest = function(nums, k) {
  const len = nums.length;
  if (!(k >= 1 && k <= len)) {
    throw new Error('findKthLargest方法中k不符合要求');
  }
  // [0, ..., len - 1]
  // 第k大大数，索引为k - 1
  // 从大到小排序
  const value = quickSort(nums, 0, len - 1, k - 1);
  return value;
};

const nums = [3,2,3,1,2,4,5,5,6];
console.log(findKthLargest(nums, 4));