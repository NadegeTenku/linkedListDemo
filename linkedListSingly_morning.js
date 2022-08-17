//node class
class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

const node1 = new Node('Nadege')
const node3 = new Node ('Pauline')
const node2 = new Node ('Crystal')

// node1.next = node2
// node3.next = node2
// node2.next = null

// console.log(node1)
// console.log(node2)
// console.log(node3)


//singly linkedList class
class SinglyLinkedList {
    constructor() {
        this.head
    }
    setHead(data) {
        // check to see if ther is an existing head
        if(!this.head) {
            this.head = new Node(data)
            return this.head
        } else {
            // redefine the head and the references
            let tempHead = this.head
            // set the new head
            this.head = new Node(data)
            // define the next heads next references to the oldhead
            this.head.next = tempHead
            return this.head
        }
    }
    // 
    
    addNode(data) {
        //we start at the beginning of the LL
       let currentNode = this.head
       //create a condition to check if we are at the end
       while(currentNode.next !== null) {
            currentNode = currentNode.next
       }
       currentNode.next = new Node(data)
       return
    }
    //create a function that console logs every node

//////////// Singly LL challenges /////////////

    //create a function that sets the tail(last node)

    //find node
    // findNode(data) {

    // }

    //insertNodeAtIdx
    // insertNodeAtIdx(idx, node) {

    // }

    //deleteNodeAtIdx
    // deleteNodeAtIdx(idx){

    // }

//////////// CHALLENGE /////////////    
//Prompt: Write a method that determines if the SSl is circular (hint: think of what happens when you draw a circle)

}

// see what sLL looks like
const sLL = new SinglyLinkedList()
sLL.setHead('Nadege')
sLL.addNode('Justin')
sLL.addNode('Simon')
// sLL.setHead('Brielle')
// sLL.setHead('Linda')

console.log(sLL)