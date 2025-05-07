function solution(nums) {
    const uniqueNum = new Set(nums).size;
    const maxSelect = nums.length / 2;
    return Math.min(uniqueNum, maxSelect);
}