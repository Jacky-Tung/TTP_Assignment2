function moveZeros(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  for (; j < nums.length; j++) {
    nums[j] = 0;
  }
}

const nums = [0, 1, 0, 3, 12];
moveZeros(nums);
console.log(nums);
// -> [1, 3, 12, 0, 0]
