/**
 * https://leetcode.com/problems/sort-list/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {

    if(!head) return head;

    function makeArray(head) {
        let ar = [];
        let current = head;
        ar.push(parseInt(current.val));
        while(current.next != null) {
            current = current.next;
            ar.push(parseInt(current.val));
        }
        return ar.sort((a, b) => a - b);
    };
    function makeList(arr) {
        let head = new ListNode(arr[0]);
        if(arr.length <=1) return head;

        let current = head;
        for(let i=1;i<arr.length;i++) {
            let tmp = new ListNode(arr[i]);
            current.next = tmp;
            current = current.next;
        }
        return head;
    };
    let a1 = makeArray(head);
    return makeList(a1);
};


function ListNode(val) {
    this.val = val;
    this.next = null;
};

function display(head) {
    let current = head;
    console.log(head.val);
    while(current.next != null) {
        current = current.next;
        console.log(current.val);
    }
};

// 4->2->1->3
// var node3 = new ListNode(3);
// var node1 = new ListNode(1);
// node1.next = node3;
// var node2 = new ListNode(2);
// node2.next = node1;
// var node4 = new ListNode(4);
// node4.next = node2;

//-1->5->3->4->0
// var node0 = new ListNode(0);
// var node4 = new ListNode(4);
// node4.next = node0;
// var node3 = new ListNode(3);
// node3.next = node4;
// var node5 = new ListNode(5);
// node5.next = node3;
// var node1 = new ListNode(-1);
// node1.next = node5;

// let x = sortList(node1);
// console.log(x);

//[4,19,14,5,-3,1,8,5,11,15] >> [-3,1,4,5,5,8,11,14,15,19]
var node15 = new ListNode(15);
var node11 = new ListNode(11);
node11.next = node15;
var node5 = new ListNode(5);
node5.next = node11;
var node8 = new ListNode(8);
node8.next = node5;
var node1 = new ListNode(1);
node1.next = node8;

var node_3 = new ListNode(-3);
node_3.next = node1;
var node55 = new ListNode(5);
node55.next = node_3;
var node14 = new ListNode(14);
node14.next = node55;
var node19 = new ListNode(19);
node19.next = node14;
var node4 = new ListNode(4);
node4.next = node19;


let x = sortList(node4);
// console.log(x);
display(x);


// var node0 = [];
// let x = sortList(node0);
// console.log(x);
