class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const flattenedMatrix = matrix.flat()
        return flattenedMatrix.includes(target)
    }
}
