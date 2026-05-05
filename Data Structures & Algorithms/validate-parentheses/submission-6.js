class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const map = {
            "(":")",
            "{":"}",
            "[":"]",
        }


        for (let character of s) {
            if (map[character]) {
                stack.push(character)
            } else {
                if (stack.length === 0) {
                    return false
                } else {
                    const lastOpen = stack.pop()
                    if (map[lastOpen] !== character) {
                        return false
                    } 
                }
            }
        }
        console.log(stack)
        return stack.length === 0
    }
}

// ()
// {}
// []

// ([{}]


//  if you find opening parenthese, push it into the stack. once you find a close
// parenthese, remove the corresponding open one from the stack.

// stack = ["("]
