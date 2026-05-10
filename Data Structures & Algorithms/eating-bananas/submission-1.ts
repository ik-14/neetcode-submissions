class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1
        let right = Math.max(...piles)
        let res = right
        
        while (left <= right ) {
            let mid = Math.floor((left + right) / 2)

            let totalTime = 0
            for (const pile of piles) {
                totalTime = totalTime + Math.ceil(pile / mid)   
            }

            if (totalTime <= h) {
                res = mid
                right = mid - 1

            } else {
                left = mid + 1
            }
        }
        return res
    }
}
