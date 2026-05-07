class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number) {
        const flattenedArr = matrix.flat()
        const flattenedArrlength = flattenedArr.length

        let l = 0
        let r = flattenedArrlength - 1

        for (let i = 0; i < flattenedArrlength; i++) {
            let mid = Math.floor((l + r) / 2)

            console.log(flattenedArrlength, mid)

            if (flattenedArr[mid] === target) {
                return true;
            }
            else if (flattenedArr[mid] < target) {
                l = mid + 1
            } else if (flattenedArr[mid] > target) {
                r = mid - 1
            }
        }

        return false
    }
}
