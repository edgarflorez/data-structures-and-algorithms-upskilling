# Arrays and Strings

Arrays are the most fundamental linear structure. Review how arrays store items in contiguous memory allowing constant-time random access by index
[geeksforgeeks.org](https://www.geeksforgeeks.org/dsa/array-data-structure-guide/). Learn common operations (traversal, insertion, deletion) and their time complexity. In TypeScript/JavaScript, strings are essentially arrays of characters; practice iterating and manipulating strings as well. References: Read about array characteristics (contiguous storage and O(1) indexing) [geeksforgeeks](https://www.geeksforgeeks.org/dsa/array-data-structure-guide/).org. In TypeScript, arrays have strongly-typed elements which helps prevent runtime errors [bdking71.wordpress.com](https://bdking71.wordpress.com/2025/01/13/mastering-data-structures-and-algorithms-with-typescript/#:~:text=implementing%20these%20structures%20is%20not,A).

## Practice

Implement a function to reverse an array in place and another to check if a string is a palindrome. Try an easy problem like Two Sum (find two numbers in an array that add up to a target) to apply array traversal and maybe use a hash map for optimization.

## Notes

-   Array is a collection of items located in contiguous memory, allowing O(1) access to items. It is a linear data structure.
-   Cache friendliness, since the data is near is likely you acces near items, this principle helps the memory use is notable on loops.
-   ⚠️ Is not useful in operations where we need to insert in the middle, delete on the middle or search on an unsorted data.
-   Is a fundamental data structure to build other data structures like Stack Queue, Deque, Graph, Hash table etc.
-   Arrays can be categorized based on its size and dimension.
    -   Size could be fixed or dynamic.
    -   dimension can range from one dimension, like a linear array or 2d like an array of arrays or matrix, other categories we can find 3d or 4d – 3d can be a and array of two dimensional arrays.
-   Operations on arrays
    -   Array traversal
    -   Insertion on an Array - depending on the index you want to insert, the elements to the right of the index are shifted to make room to the new element.
        -   Insertion at the beginning is not a good scenario because all elements should be shifted
        -   insertion in the middle, shift half of the items right and inset the new item.
        -   Insertion at the end, this is the ideal scenario because no shift only allocate more memory if needed and add the iterm.
    -   Deletion on Array - the action of remove an element and move the items to fill the gap.
        -   Involves identify the position, the items after the deleted item will move left and finally update the index
        -   Removing at 0 index, this is the most expensive case all the elements should move left to fill the gap
        -   Deletion at a specific index, only elements after the index will shif-left to fill the gap
        -   Deletion at the end, the simplest case no need to shift-left
    -   Searching on Array.
        -   Linear search, check item by item comparing with the target value, if found return the index, the linear seach continues until the end of the array.
        -   binary search, efficient search for sorted arrays. take the middle point, check if the value is equal to the target, if it match the target return the index, if is smaller take the lef side otherwise the right side and perform the same verification until there is no more items to check against.
-   Application of Array data structure
    -   Storing and access data, constant time O(1)
    -   Searching if data in array is sorted you can achieve O(log n)
    -   Matrices, two dimensional arrays for matrices in computation and image processing.
    -   Implementing other data structures, arrays are used the underlying data structure for implementing stacks and queues.
    -   Dynamic programming. Dynamic programming algorithms often uses arrays to store intermediate results of subproblems in order to solve a larger problem.
    -   Data buffers: Arrays serve as data buffers and queues, temporarily storing incoming data like network packets, file stream and databases results before processing.

## Resources

-   https://www.geeksforgeeks.org/dsa/array-data-structure-guide/
