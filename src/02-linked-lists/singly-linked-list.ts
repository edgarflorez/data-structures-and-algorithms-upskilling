/*
Implement a class LinkedList in TypeScript that represents a singly linked list. Each node should store a value and a reference to the next node.

Your linked list should support the following methods:

- insertAtFront(value) – Insert a new node at the beginning of the list.
- insertAtEnd(value) – Insert a new node at the end of the list.
- insertAt(index, value) – Insert a new node at a specific position.
- deleteAtFront() – Remove the first node.
- deleteAtEnd() – Remove the last node.
- deleteAt(index) – Remove a node at a specific position.
- search(value) – Return true if the value exists in the list, otherwise false.
- getAt(index) – Return the value at a specific position.
- size() – Return the total number of nodes in the list.
- isEmpty() – Return true if the list is empty.
- printList() – Print all values in the list.
- reverse() – Reverse the linked list in place.
 */

class Node<T> {
	data: T;
	next: Node<T> | null;

	constructor(x: T) {
		this.data = x;
		this.next = null;
	}
}

export default class LinkedList<T> {
	head: Node<T> | null;
	tail: Node<T> | null;
	size = 0;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	private resetLinkedList() {
		this.head = this.tail = null;
	}

	insertAtFront = (x:T) => {
		const newNode = new Node(x);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.size = 1;
			return;
		}

		newNode.next = this.head;
		this.head = newNode;
		this.size++;
	}

	insertAtEnd = (x:T) => {
		const newNode = new Node(x);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.size = 1;
			return;
		}
		if(this.tail) {
			this.tail.next = newNode;
		}
		this.tail = newNode;
		this.size++;
	}

	/**
	 *
	 * @param x new value
	 * @param insertIndex position for the new value, the index should be within bounds `0 <= index <= size`
	 * @returns
	 */
	insertAt = (x:T, insertIndex: number) => {
		if(insertIndex < 0 || insertIndex > this.size + 1) {
			throw new Error("Error: Index out of bound")
		}

		if(insertIndex === 0) {
			this.insertAtFront(x);
			return
		}

		if(insertIndex === this.size){
			this.insertAtEnd(x);
			return;
		}

		if(this.head) {
			const newNode = new Node(x);
			let counter = 0;
			let pointer: Node<T>  = this.head;
			while (counter <= insertIndex) {
				// The modification should be done on the previous node.
				if(counter + 1 === insertIndex) {
					newNode.next = pointer.next;
					pointer.next = newNode;
					this.size++;
					break;
				}
				if(pointer.next) {
					pointer = pointer.next;
				}
				counter++
			}
		}
	}

	deleteAtFront = () => {
		if(!this.size){
			throw new Error('Error: is not possible delete on an empty Linked list')
		}

		if(this.head) {
			const newHead = this.head.next;
			this.head = newHead;
			this.size--;
		}

		if(!this.size) {
			this.resetLinkedList();
		}
	}

	deleteAtEnd = () => {
		if(!this.size){
			throw new Error('Error: is not possible delete on an empty Linked list')
		}

		if(this.size === 1) {
			this.deleteAtFront();
		}

		if(this.head) {
			let counter = 0;
			let pointer: Node<T>  = this.head;
			const previousNodeIndex = this.size - 2;

			while (counter <= previousNodeIndex) {
				if(counter === previousNodeIndex) {
					pointer.next = null;
					this.size--;
					break;
				}
				if(pointer.next) {
					pointer = pointer.next;
				}
				counter++
			}
		}

		if(this.size === 0) {
			this.resetLinkedList();
		}
	}

	deleteAt = (deleteIndex: number) => {
		if(deleteIndex < 0 || deleteIndex >= this.size) {
			throw new Error("Error: Index out of bound");
		}

		if(deleteIndex === 0) {
			this.deleteAtFront();
		}

		if(this.head) {
			let counter = 0;
			let pointer: Node<T> = this.head;
			while(counter <= deleteIndex) {
				// The modification should be done on the previous node
				if(counter + 1 === deleteIndex) {
					pointer.next = pointer.next?.next || null;
					this.size--;
					break;
				}
				if(pointer.next) {
					pointer = pointer.next;
				}
				counter++
			}
		}
	}

	search = (query: T) => {
		if(!this.size) {
			return false;
		}

		if(this.head) {
			let counter = 0;
			let pointer: Node<T> = this.head;
			while(counter < this.size) {
				if(pointer.data === query) {
					return true;
				}
				if(pointer.next) {
					pointer = pointer.next;
				}
				counter++
			}

			return false
		}
	}

	getAt = (getIndex:number) => {
		if(!this.size) {
			return undefined;
		}

		if(getIndex < 0 || getIndex >= this.size) {
			throw new Error("Error: Index out of bound")
		}

		if(this.head) {
			let counter = 0;
			let pointer: Node<T> = this.head;
			while(counter < this.size) {
				if(counter === getIndex) {
					return pointer.data;
				}
				if(pointer.next) {
					pointer = pointer.next;
				}
				counter++
			}
		}
	}

	printList = () => {
		let response: T[] = []

		let curr:Node = this.head;
		while (curr !== null) {
			response.push(curr.data);
			curr = curr.next;
		}

		return response;
	}
}


// Analysis
