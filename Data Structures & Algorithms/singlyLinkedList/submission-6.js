class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

 get(index) {
        let curr = this.head;
        let i = 0;
        while (curr) {
            if (i === index) {
                return curr.val;
            }
            i++;
            curr = curr.next;
        }
        return -1;
    }

    insertHead(val) {
        const newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        if (!newNode.next) {
            this.tail = newNode
        }
    }

    insertTail(val) {
        const newNode = new Node(val)
        if (!this.head && !this.tail) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    remove(index) {
        if (index === 0) {
  if (!this.head) return false;
  this.head = this.head.next;
  // If list becomes empty, update tail
  if (!this.head) this.tail = null;
  return true;
}

      let curr = this.head
      let i = 0
      let prev = null
      while (curr) {
        if (i === index) {
            prev.next = curr.next
            if (this.tail === curr) {
                this.tail = prev
            }
            return true
        }  
        prev = curr
        curr = curr.next
        i++
      }
      return false
    }

    getValues() {
        // initialise empty arr to store all values.
        // walk thru each and push current.val.
        // once loop complete, return arr
        let arr = []
        let curr = this.head
        while (curr) {
            arr.push(curr.val)
            curr = curr.next
        }
        return arr
    }
}
