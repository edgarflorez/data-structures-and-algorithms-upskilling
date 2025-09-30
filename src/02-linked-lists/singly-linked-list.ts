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
- clear()
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
	private _head: Node<T> | null;
	private _tail: Node<T> | null;
	private _size: number;

	constructor() {
		this._head = null;
		this._tail = null;
		this._size = 0;
	}

	private _resetLinkedList() {
		this._head = null;
		this._tail = null;
		this._size = 0;
	}

	private _assertTypeIndex(index: number): void {
		if(!Number.isInteger(index)) throw new RangeError("Index must be a number")
	}

	private _assertInsertIndex(index: number): void {
		this._assertTypeIndex(index);
		if(index < 0 || index > this._size) {
			throw new RangeError("Index out of bound for insert")
		}
	}


	private _assertAccessIndex(index: number): void {
		this._assertTypeIndex(index);
		if(index < 0 || index >= this._size) {
			throw new RangeError("Index out of bound for access")
		}
	}

	private _getNodeAt(index: number): Node<T> {
		this._assertAccessIndex(index);

		let curr = this._head;
		for (let i = 0; i < index; i++) {
			curr = curr!.next;
		}

		return curr;
	}

	insertAtFront = (x:T) => {
		const newNode = new Node(x);
		if(this._size === 0) {
			this._head = newNode;
			this._tail = newNode;
			this._size = 1;
			return;
		}

		newNode.next = this._head;
		this._head = newNode;
		this._size++;
	}

	insertAtEnd = (x:T) => {
		const newNode = new Node(x);
		if(this._size === 0) {
			this._head = newNode;
			this._tail = newNode;
			this._size = 1;
			return;
		}
		if(this._tail) {
			this._tail.next = newNode;
		}
		this._tail = newNode;
		this._size++;
	}

	insertAt = (index: number, value:T) => {
		this._assertInsertIndex(index);
		if(index === 0) return this.insertAtFront(value);
		if(index === this._size) return this.insertAtEnd(value);

		const prevNode = this._getNodeAt(index - 1);
		const newNode = new Node(value);
		newNode.next = prevNode.next;
		prevNode.next = newNode;
		this._size++;
	}

	deleteAtFront = (): T | undefined => {
		if(this._size === 0) return undefined;

		const value: T = (this._head as Node<T>).data;
		this._head = (this._head as Node<T>).next;
		this._size--;
		if(this._size === 0) this._tail = null;

		return value;
	}

	deleteAtEnd = (): T | undefined => {
		if(this._size === 0) return undefined;
		if(this._size === 1) return this.deleteAtFront();

		const prevNode: Node<T> | null = this._getNodeAt(this._size - 2);
		const value: T = (prevNode.next as Node<T>).data;
		this._tail = prevNode;
		this._size--;
		(prevNode as Node<T>).next = null;

		return value;
	}

	deleteAt = (index: number): T | undefined => {
		this._assertAccessIndex(index);
		if(index === 0) return this.deleteAtFront();
		if(index === this._size - 1) return this.deleteAtEnd();

		const prevNode: Node<T> | null = this._getNodeAt(index - 1);
		const value: T = (prevNode.next as Node<T>).data
		prevNode.next = prevNode.next!.next;
		this._size--;
		return value;
	}

	search = (query: T, comparator: (a: T, b: T) => boolean = (a, b) => a === b): number => {
		if (!this._size) return -1;

		let index = 0;
		for (let curr = this._head; curr !== null; curr = curr.next) {
			if (comparator(curr.data, query)) return index;
			index++;
		}
		return -1;
	};

	getAt = (index:number) => {
		this._assertAccessIndex(index)

		const node: Node<T> = this._getNodeAt(index);
		return node.data;
	}

	isEmpty = () => {
		return !this._size;
	}

	toArray = () => {
		let response: T[] = []

		let curr: Node<T> | null = this._head;
		while (curr !== null) {
			response.push(curr.data);
			curr = curr.next;
		}

		return response;
	}

	size = () => {
		return this._size;
	}

	reverse = () => {
		if(this._size === 0 || this._size === 1) {
			return;
		}

		// Use the prev, current, next pointer reversal
		// https://www.geeksforgeeks.org/dsa/reverse-a-linked-list/
		let prev = null;
		let curr: Node<T> | null = this._head;
		let next: Node<T> | null = null;

		while(curr) {
			// Store next
			next = curr.next;
			// reverse link
			curr.next = prev;
			// Move two pointers one step ahead
			prev = curr;
			curr = next;
		}

		this._tail = this._head;
		this._head = prev;
	}

	clear = () => {
		this._resetLinkedList();
	}
}


// Analysis
