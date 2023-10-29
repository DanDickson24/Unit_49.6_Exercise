/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  const num = nums.pop();
  return num * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  const word = words.pop();
  const wordLength = word.length;
  const maxLength = longest(words);
  return wordLength > maxLength ? wordLength : maxLength;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  function helper(str, index) {
    if (index >= str.length) {
      return '';
    }
    return str[index] + helper(str, index + 2);
  }
  return helper(str, 0);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  function helper(left, right) {
    if (left >= right) {
      return true;
    }
    if (str[left] !== str[right]) {
      return false;
    }
    return helper(left + 1, right - 1);
  }
  return helper(0, str.length - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  function helper(arr, val, index) {
    if (index >= arr.length) {
      return -1;
    }
    if (arr[index] === val) {
      return index;
    }
    return helper(arr, val, index + 1);
  }
  return helper(arr, val, 0);
}
/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === '') {
    return '';
  }
  const lastChar = str.charAt(str.length - 1);
  return lastChar + revString(str.substring(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  function helper(arr, val, left, right) {
    if (left > right) {
      return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      return helper(arr, val, mid + 1, right);
    } else {
      return helper(arr, val, left, mid - 1);
    }
  }
  return helper(arr, val, 0, arr.length - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
