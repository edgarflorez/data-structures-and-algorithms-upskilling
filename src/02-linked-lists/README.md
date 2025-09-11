# Linked Lists

A linked list uses nodes that point to the next node, forming a chain. Unlike arrays, linked lists are not contiguous in memory, but they allow efficient insertions/removals by adjusting pointers
[geeksforgeeks.org](geeksforgeeks.org/dsa/linked-list-data-structure/#:~:text=A%20linked%20list%20is%20a,of%20Linked%20List%20vs%20Arrays). Study singly vs doubly linked lists and their trade-offs. In TypeScript, you can define a Node class with properties for value and next (and prev for doubly-linked). References: Review how linked lists compare to arrays (efficient at inserts/deletes, but sequential access only)
[geeksforgeeks.org](geeksforgeeks.org/dsa/linked-list-data-structure/#:~:text=A%20linked%20list%20is%20a,of%20Linked%20List%20vs%20Arrays).

## Practice

Implement a singly linked list in TypeScript (with insertAtHead, append, deleteNode functions). Test by creating a list of numbers and removing some. Solve a classic problem like Merge Two Sorted Lists [leetcode #21](https://leetcode.com/problems/merge-two-sorted-lists/description/) to practice manipulating list nodes.

## Notes

![Linked List](https://media.geeksforgeeks.org/wp-content/uploads/20250619155958124670/Linked-list-660.webp "Linked list")

This data structure allow a better efficiency in insertion and deletion specially at the beginning of the list. Like arrays, it is also used for implement other structures like stack, queue and deque.

### Linked list and Array comparison

|                    | Linked List        | Array           |
| ------------------ | ------------------ | --------------- |
| Data structure     | Non contiguous     | Contiguous      |
| Memory Allocation  | one by one element | the whole array |
| Insertion/Deletion | Efficient          | Ineficient      |
| Access             | Sequential         | Random          |

## Resources

- https://www.geeksforgeeks.org/dsa/linked-list-data-structure/
