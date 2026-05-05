class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        console.log(new Set(nums))
        if (new Set(nums).size !== nums.length) {
            return true
        }
        return false
    }
}
