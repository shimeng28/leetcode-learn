/**
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，
 * 返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 给定 nums = [3,2,2,3], val = 3,
 * 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
 * @param {*} nums 
 * @param {*} val 
 */

var removeElement = function(nums, val) {
  const len = nums.length;
  let valCount = 0;
  for (let i = 0; i < len - valCount; ) {
    if (nums[i] === val) {
      const tmp = nums[len - 1 - valCount];
      nums[len - 1 - valCount] = nums[i];
      nums[i] = tmp;
      valCount++;
    } else {
      i++;
    }
  }
  return len - valCount;
};

const nums = [3,2,2,3];

console.log(removeElement(nums, 3));