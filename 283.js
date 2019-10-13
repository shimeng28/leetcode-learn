/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，
 * 同时保持非零元素的相对顺序。
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * @param {Array} nums 
 */

// 非零数不符合相对位置
var moveZeroes1 = function(nums) {
  const len = nums.length;
  let i = 0;
  let zeroCount = 0;
  while (i + zeroCount < len) {
    if (nums[i] === 0) {
      const tmp = nums[i];
      nums[i] = nums[len - 1 - zeroCount];
      nums[len - 1 - zeroCount] = tmp;
      zeroCount++;
    } else {
      i++;
    }
  }

  console.log(nums);
  return nums;
};

// 执行成功
var moveZeroes2 = function(nums) {
  const len = nums.length;
  let i = 0;
  let nonZeroCount = 0;

  while (i < len) {
    if (nums[i] !== 0) {
      const tmp = nums[i];
      nums[i] = nums[nonZeroCount];
      nums[nonZeroCount] = tmp;
      nonZeroCount++;
    }
    i++;
  }

  console.log(nums);
  return nums;
};

// 用for实现
var moveZeroes3 = function(nums) { 
  const len = nums.length;
  let nonZeroCount = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      const tmp = nums[nonZeroCount];
      nums[nonZeroCount++] = nums[i];
      nums[i] = tmp;
    }
  }
  console.log(nums);
  return nums;
}
// 时间复杂度O(n)
// 空间复杂度O(1)
var moveZeroes4 = function(nums) {
  const len = nums.length;
  let nonZeroCount = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroCount++] = nums[i];
    }
  }

  for (let i = nonZeroCount; i < len; i++) {
    nums[i] = 0;
  }

  console.log(nums);
  return nums;
}

var moveZeroes5 = function(nums) {
  const len = nums.length;
  let nonZeroCount = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      const tmp = nums[nonZeroCount];
      nums[nonZeroCount++] = nums[i];
      nums[i] = tmp;
    }
  }
  console.log(nums);
  return nums;
}

var moveZeroes = function(nums) {
  const len = nums.length;
  let nonZeroCount = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      if (i !== nonZeroCount) {
        const tmp = nums[nonZeroCount];
        nums[nonZeroCount++] = nums[i];
        nums[i] = tmp;
      } else {
        nonZeroCount++;
      }
    }
  }
  console.log(nums);
  return nums;
}

const a = [0,1,0,3,21];
moveZeroes(a)