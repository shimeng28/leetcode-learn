/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 *
 * https://leetcode-cn.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (58.93%)
 * Likes:    203
 * Dislikes: 0
 * Total Accepted:    27.3K
 * Total Submissions: 46.2K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [1], k = 1
 * 输出: [1]
 * 
 * 说明：
 * 
 * 
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MinHeap {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.data = [];
  }

  shiftUp(index) {
    const value = this.data[index];
    let parentIndex = parseInt(index / 2, 10);
    while (index > 0 && this.data[parentIndex].freq > value.freq) {
      this.data[index] = this.data[parentIndex];
      index = parentIndex;
      parentIndex = parseInt(index / 2, 10);
    }
    this.data[index] = value;
  }

  shiftDown(i) {
    const value = this.data[i];
    let childIndex = i * 2 + 1;
    while (childIndex < this.size) {
      if (childIndex + 1 < this.size && this.data[childIndex].freq > this.data[childIndex + 1].freq) {
        childIndex++;
      }

      if (this.data[childIndex].freq > value.freq) break;

      this.data[i] = this.data[childIndex];
      i = childIndex;
      childIndex = i * 2 + 1;
    }

    this.data[i] = value;
  }

  add(val) {
    if (this.size >= this.capacity) {
      if (val.freq <= this.data[0].freq) return;
      this.data[0] = val;
      this.shiftDown(0);
    } else {
      this.data.push(val);
      this.size++;
      this.shiftUp(this.data.length - 1);
    }
  }

  pop() {
    if (this.size < 1) return null;
    const ret = this.data[0];
    this.data[0] = this.data.pop();
    this.size--;
    this.shiftDown(0);
    return ret;
  }

  getSize() {
    return this.size;
  }
}
var topKFrequent = function(nums, k) {
  const freqMap = new Map();
  nums.forEach((item) => {
    let count = freqMap.get(item);
    if (typeof count === 'undefined') {
      count = 0;
    }
    freqMap.set(item, ++count);
  });

  const heap = new MinHeap(k);
  for (let [value, freq] of freqMap) {
    heap.add({
      value,
      freq
    });
  }
  const ret = [];
  while (k) {
    ret[--k] = heap.pop().value;
  }

  return ret;
};
// @lc code=end

module.exports = topKFrequent;

