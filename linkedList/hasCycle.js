var hasCycle = function(head) {
    if(!head || !head.next || !head.next.next){
        return false
    }
    let walker = head.next;
    let runner = head.next.next;
    while(runner !== null){
        if(walker === runner){
            return true;
        }
        if(!walker.next || !runner.next ||!runner.next.next){
            return false
        }
        walker = walker.next;
        runner = runner.next.next;
    }
    return false
};

const getMid = (head) => {
    let [ slow, fast ] = [ head, head ];

    while (fast && fast.next) {         /* Time O(N) */
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}