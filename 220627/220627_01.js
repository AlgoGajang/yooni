function solution(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  let answer = Math.min(nums.length / 2, arr.length);
  return answer;
}
