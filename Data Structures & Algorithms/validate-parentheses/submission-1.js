class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
       isValid(s) {
        let stack = []
        const map = {
            ")" : "(",
            "}" : "{",
            "]" : "[",
        }
        // loop through string
        for (let el of s) {
            if (map[el]) {
                if (stack.length > 0 && stack[stack.length - 1] === map[el]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(el)
            }
        }
        //      if el is closing parenthese
        //          if stack is not empty && the last value in the stack is the corresponding open parenthese
        //              pop last el from stack
        //          else return false
        //      push el to stack
        return stack.length === 0
    }
}
