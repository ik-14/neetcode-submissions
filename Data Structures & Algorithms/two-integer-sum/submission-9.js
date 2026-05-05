class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //
        //
        //
        //
        for (let i = 0; i < nums.length; i++) {
            let initialCalc = target - nums[i]
            const indexOfDiff = nums.indexOf(initialCalc)
            const secondIndexOf = nums.indexOf(initialCalc, nums.indexOf(initialCalc) + 1)
            console.log(`Iteration number: ${i+1}`)
            console.log(`initialCalc: ${initialCalc}`)
            console.log(`indexOfDiff: ${indexOfDiff}`)
            console.log(`secondIndexOf: ${secondIndexOf}`)
            if (indexOfDiff !== -1 && indexOfDiff !== i) {
                return [i, indexOfDiff]
            }
        }
    }
}
