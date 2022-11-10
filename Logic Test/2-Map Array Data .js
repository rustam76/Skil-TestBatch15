var productArray = function(nums) {
    var len = nums.length;
    var left = Array(len + 1);
    var right = Array(len + 1);
    var res = Array(len);
  
    left[0] = 1;
    right[0] = 1;
  
    for (var i = 0; i < len; i++) {
      left[i + 1] = left[i] * nums[i];
    }
  
    for (var j = 0; j < len; j++) {
      right[j + 1] = right[j] * nums[len - 1 - j];
    }
  
    for (var k = 0; k < len; k++) {
      res[k] = left[k] * right[len - k - 1];
    }
  
    return res;
  };
  
console.log(productArray([12,20]));
console.log(productArray([12,20]));
console.log(productArray([3,27,4,2]));
console.log(productArray([13,10,5,2,9]));
console.log(productArray([16,17,4,3,5,2]));