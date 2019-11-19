/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (44.75%)
 * Likes:    199
 * Dislikes: 0
 * Total Accepted:    52.4K
 * Total Submissions: 116.9K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2,2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [4,9]
 * 
 * 说明：
 * 
 * 
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 * 进阶:
 * 
 * 
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if (!nums1 || !nums2 || !nums1.length || !nums2.length) return [];

  const recordMap = new Map();
  nums1.forEach((item) => {
    if (!recordMap.has(item)) {
      recordMap.set(item, 1);
      return;
    }
    recordMap.set(item, recordMap.get(item) + 1);
  });

  const result = [];
  nums2.forEach((item) => {
    const itemCount = recordMap.get(item);
    if (typeof itemCount === 'undefined') return;

    result.push(item);  
    if (itemCount === 1) {
      recordMap.delete(item);
    } else {
      recordMap.set(item, itemCount - 1);
    }
  });

  nums2.forEach((item) => {
    const itemCount = recordMap.get(item);
    if (typeof itemCount === 'undefined') return;
    if (itemCount > 0) {
      result.push(item); 
      recordMap.set(item, itemCount - 1);
    }
  });

  return result;
};
// @lc code=end

