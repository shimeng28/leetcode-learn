  // 自顶向下二分
  function merge(arr) {
    function _merge(list, left, mid, right) {
      const aux = [];
      for (let i = left; i <= right; i++) {
        aux[i - left] = list[i];
      }

      let i = left;
      let j = mid + 1;
      for (let k = left; k <= right; k++) {
        if (i > mid) {
          list[k] = aux[j - left];
          j++;
        } else if (j > right) {
          list[k] = aux[i - left];
          i++;
        } else if (aux[i] < aux[j]) {
          list[k] = aux[i - left];
          i++;
        } else {
          list[k] = aux[j - left];
          j++;
        }
      }
    }
    function _mergeSort(list, left, right) {
      if (left >= right) return;
      const mid = parseInt((right - left) / 2, 10) + left;
      _mergeSort(list, left, mid);
      _mergeSort(list, mid + 1, right);
      _merge(list, left, mid, right);
    }

    _mergeSort(arr, 0, arr.length - 1);
  }

// 自底向上
function mergeBU(arr) {
  function merge(list, left, mid, right) {
    console.log(left, mid, right);
    const aux = [];
    for (let i = left; i <= right; i++) {
      aux[i - left] = list[i];
    }

    let x = left;
    let y = mid + 1;
    for (let k = left; k <= right; k++) {
      if (x > mid) {
        list[k] = aux[y - left];
        y++;
      } else if (y > right) {
        list[k] = aux[x - left];
        x++;
      } else if (aux[x - left] < aux[y - left]) {
        list[k] = aux[x - left];
        x++;
      } else {
        list[k] = aux[y - left];
        y++;
      }
    }
  }
  const len = arr.length;
  for (let size = 1; size < len; size += size) {
    for (let i = 0; i + size - 1 < len; i += 2 * size) {
      merge(arr, i, i + size - 1, Math.min(len - 1, i + size * 2 - 1));
    }
  }
}
