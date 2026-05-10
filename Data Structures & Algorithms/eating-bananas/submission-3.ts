class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1
        let right = Math.max(...piles)
        let result;

        while (left <= right) {
            let k = Math.floor((left + right) / 2) // k is eating speed per hour

            let totalT = 0
            for (const pile of piles) {
                totalT = totalT + Math.ceil(pile / k)
            }

            if (totalT <= h) {
                result = k
                right = k - 1
            } else {
                left = k + 1
            }
        }
        
        return result
    }
}
