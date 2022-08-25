// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        let newNode = new ListNode(value)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        return `added node ${JSON.stringify(newNode)}`
    }

    addToBack(value) {
        let newNode = new ListNode(value)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        return `added node to end ${JSON.stringify(newNode)}`
    }

    size() {
        let count = 0
        let runner = this.head
        while (runner) {
            count++
            runner = runner.next
        }
        return count
    }

    removeFront() {
        return this.head = this.head.next
    }

    removeBack() {
        let currentNode = this.head
        while (currentNode.next != null) {
            if (currentNode.next === this.tail) {
            return this.tail = currentNode 
                currentNode.next = null
            }
            currentNode = currentNode.next
        }  
    }
}

function generateNewList(length, min_value, max_value) {
    let new_sll = new SinglyLinkedList();
    for (let i = 0; i < length; i++) {
        new_sll.addToFront(Math.floor(Math.random() * max_value) + min_value)
    }
    return new_sll
}

// let node1 = new ListNode(4)
// let node2 = new ListNode(3)
// node2.next = node1

// console.log(node2);
let sll = new SinglyLinkedList()
console.log(sll.addToFront(4))
console.log(sll.addToFront(3))
console.log(sll.addToFront(2))
console.log(sll.addToBack(1))
console.log(sll.addToBack(22))
console.log(sll.removeFront())
console.log(sll.removeBack())
console.log(sll.size())
console.log(sll)