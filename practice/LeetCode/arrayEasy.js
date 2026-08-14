function twoSum(arr, target) {
  const map = new Map();
  const result = [];
  let index = 0;
  for (const key of arr) {
    const diff = target - key;

    if (map.has(key)) {
      result.push(map.get(key), index);
    }
    map.set(diff, index);
    index++;
  }

  console.log(map);
  return result;
}
console.log(twoSum([2, 11, 15, 7], 9)); // [0, 3]

var maximumProduct = function (array) {
  const sorted = array.sort((a, b) => a - b);
  const n = array.length;
  const option1 = sorted[n - 1] * sorted[n - 2] * sorted[n - 3];
  const option2 = sorted[0] * sorted[1] * sorted[n - 1];
  return Math.max(option1, option2);
};

console.log(maximumProduct([-10, -10, 1, 2, -3]));

function longestCommonPrefix(array) {
  let prefix = '';
  for (let i = 0; i < array[0].length; i++) {
    let sameChar = true;
    for (let j = 1; j < array.length; j++) {
      if (array[0][i] !== array[j][i]) {
        sameChar = false;
        break;
      }
    }
    if (sameChar) {
      prefix += array[0][i];
    } else {
      break;
    }
  }

  return prefix;
}
console.log(longestCommonPrefix(['ab', 'a']));

function removeDuplicates(nums) {
  let write = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[write] = nums[i];
      write++;
    }
  }
  console.log(nums);
  return write;
}
console.log(removeDuplicates([1, 1, 1, 2])); // Типо МЫ РАБОТАЛИ С ОРИГИНАЛЬНЫМ МАССИВОМ....

function removeElement(nums, val) {
  let write = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[write] = nums[i];
      write++;
    }
  }
  return write;
}
console.log(removeElement([3, 2, 2, 3], 3)); // in-place.... cringe

function searchInsert(nums, target) {
  // let index = 0;
  // for (const item of nums) {
  //   if (item >= target) {
  //     return index;
  //   }
  //   index++;
  // }
  // return nums.length;

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}
console.log(searchInsert([1, 3, 5, 6, 8], 7)); // O(n) + O(log n)

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return [...digits];
    }
    digits[i] = 0;
  }
  return [1, ...digits];
}
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

function mergeSortedArrays(nums1, m, nums2, n) {
  let i = m - 1; // nums 1
  let j = n - 1; // nums 2
  let write = m + n - 1;

  for (let step = 0; step < n + m; step++) {
    if (j < 0) {
      break;
    }
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[write] = nums1[i];
      i--;
    } else {
      nums1[write] = nums2[j];
      j--;
    }
    write--;
  }
  return nums1;
}

console.log(mergeSortedArrays([1, 2, 3], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(mergeSortedArrays([4, 5, 6], 3, [1, 2, 3], 3)); // [1,2,3,4,5,6]
