class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 1
        for (let r = 1; r < nums.length; r++) {
            if (nums[r] !== nums[r-1]) {
                nums[left] = nums[r]
                left+=1
            }
        }
        return left
    }
}
