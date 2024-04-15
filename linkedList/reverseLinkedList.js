const { LinkedList } = require("./linkedList");


var reverseList = function(head) {
    let anchor = head;
    let mover = head;
    while(anchor){
        if(!anchor.next){
            break;
        }
        mover = anchor.next
        anchor.next = mover.next;
        mover.next = null;
        mover.next = head;
        head = mover;
    }
    return head;
};


const linkedList = new LinkedList();
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)

const firstElement = linkedList.head;

console.log(reverseList(firstElement))
