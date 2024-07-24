// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Function to add two numbers represented by linked lists
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = new ListNode();  // Create a dummy node to simplify the process
    let current = head;

    while (true) {
        let value1 = l1 === null ? 0 : l1.val;
        let value2 = l2 === null ? 0 : l2.val;
        let sum = value1 + value2 + carry;

        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }

        current.val = sum;

        // Move to the next nodes in the lists if they exist
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;

        // If we've reached the end of both lists and there's no carry left, we're done
        if (l1 === null && l2 === null && carry === 0) break;

        // Prepare for the next iteration
        current.next = new ListNode();
        current = current.next;
    }

    return head;
};

// Helper function to create a linked list from an array
function arrayToList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print a linked list as an array
function printList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

// Example usage
let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);

let result = addTwoNumbers(l1, l2);
printList(result);  // Output: [7, 0, 8]
