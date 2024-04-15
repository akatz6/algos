const { LinkedList, Node } = require("./linkedList");

var mergeTwoLists = function (list1, list2) {
    let tempNode = new Node(0, null);
    let currentNode = tempNode;

    while(list1 && list2){
        if(list1.val < list2.val){
            currentNode.next = list1;
            list1 = list1.next
        }else{
            currentNode.next = list2;
            list2 = list2.next
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2;

    return tempNode.next;
};

const linkedListOne = new LinkedList();
linkedListOne.add(1);
linkedListOne.add(2);
linkedListOne.add(4);

const linkedListTwo = new LinkedList();
linkedListTwo.add(1);
linkedListTwo.add(3);
linkedListTwo.add(4);

console.log(mergeTwoLists(linkedListOne.head, linkedListTwo.head));
