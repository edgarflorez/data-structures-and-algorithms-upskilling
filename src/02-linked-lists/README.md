# Linked Lists

A linked list uses nodes that point to the next node, forming a chain. Unlike arrays, linked lists are not contiguous in memory, but they allow efficient insertions/removals by adjusting pointers
[geeksforgeeks.org](geeksforgeeks.org/dsa/linked-list-data-structure/#:~:text=A%20linked%20list%20is%20a,of%20Linked%20List%20vs%20Arrays). Study singly vs doubly linked lists and their trade-offs. In TypeScript, you can define a Node class with properties for value and next (and prev for doubly-linked). References: Review how linked lists compare to arrays (efficient at inserts/deletes, but sequential access only)
[geeksforgeeks.org](geeksforgeeks.org/dsa/linked-list-data-structure/#:~:text=A%20linked%20list%20is%20a,of%20Linked%20List%20vs%20Arrays).

## Practice

Implement a singly linked list in TypeScript (with insertAtHead, append, deleteNode functions). Test by creating a list of numbers and removing some. Solve a classic problem like Merge Two Sorted Lists [leetcode #21](https://leetcode.com/problems/merge-two-sorted-lists/description/) to practice manipulating list nodes.

## Notes

![Linked List](https://media.geeksforgeeks.org/wp-content/uploads/20250619155958124670/Linked-list-660.webp "Linked list")

This data structure allow a better efficiency in insertion and deletion specially at the beginning of the list. Like arrays, it is also used for implement other structures like stack, queue and deque.

### Applications of Linked List

- Polynomial Arithmetic: Used to represent and evaluate polynomials (each node stores coefficient and exponent).
- Sparse Matrices: Efficiently represent space matrices (linked lists store only non-zero values).
- Memory Management in Operating systems: Free blocks of memory (heap management) are often tracked using liked lists.
- Hash Chaining in Hash Tables: Used to handle collision in hash maps (each bucket is a linked list).
- File System Management: Directory structures and file allocation tables can use linked lists.
- Browser History Navigation: "back" and "forward" buttons use a doubly linked list.
- Image Slideshow / Carousel: Next and previous navigation is naturally implemented with circular linked lists.
- Job Scheduling / CPU Scheduling: Processes waiting for CPU time are often maintained in queues implemented via linked lists.
- Big Integer Aritmetic: Very large (beyond primitive data types) can be stored digit-by-digit in linked lists.
- Undo/Redo in drawing tools or word editors: Each state of the document can be stored as a linked list node.
- Text Editors (Like sublime, VS Code internals): Sometimes implement text as linked structure (rope/gap buffer, variations).
- Social Media feeds: Linked strucures help in representing "next post" relationships dynamically.

There are three main types of this lists:

### Singly Linked List

It consist of nodes where each one contains a data field and reference to the next node, the next of the last node is null, indicating is the end of the Linked List.

| Advantages                                                     | Disadvantages                                      |
| -------------------------------------------------------------- | -------------------------------------------------- |
| Dynamic size (no fixed limit like arrays)                      | Extra memory required for storing pointers         |
| Efficient insertion and deletion (especially in the middle)    | No direct/random access (need traversal)           |
| Can implement complex data structures like stack, queue, graph | Cache unfriendly (not stored in contiguous memory) |

### Doubly Linked List

### Circular Linked List

### Linked list and Array comparison

|                    | Linked List        | Array           |
| ------------------ | ------------------ | --------------- |
| Data structure     | Non contiguous     | Contiguous      |
| Memory Allocation  | one by one element | the whole array |
| Insertion/Deletion | Efficient          | Ineficient      |
| Access             | Sequential         | Random          |

### Insert a Node at the front of a Linked List

1. Inserting a node in front of the Linked List ![Step 1](https://media.geeksforgeeks.org/wp-content/uploads/20250827125827303536/inserting_a_node_in_front_of_linked_list.webp "step 1")
2. Assing newNode -> next = head ![Step 2](https://media.geeksforgeeks.org/wp-content/uploads/20250827125843364841/assign_newnode_next_head.webp "step 2")
3. Assign head = newNode(New Head) ![Step 3](https://media.geeksforgeeks.org/wp-content/uploads/20250827125903546799/assign_head_newnode_newhead_.webp "step 3")
4. Linked List after insertion ![Step 4](https://media.geeksforgeeks.org/wp-content/uploads/20250827125810800725/linked_list_after_insertion.webp "step 4")

## Resources

- https://www.geeksforgeeks.org/dsa/linked-list-data-structure/
- Typing Classes --> https://www.typescriptlang.org/docs/handbook/2/classes.html?utm_source=chatgpt.com
-
