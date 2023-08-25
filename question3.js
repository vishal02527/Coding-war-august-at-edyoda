/*
  Question 3:
  Given a linked list of N nodes. The task is to reverse this list.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log("Original linked list:");
let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}

const reversedHead = reverseList(head);

console.log("Reversed linked list:");
current = reversedHead;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
