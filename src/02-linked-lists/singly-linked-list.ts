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

	insertAtFront = (x:T) => {
		const newNode = new Node(x);
		if(!this._head) {
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
		if(!this._head) {
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

	private assertInsertIndex(index: number): void {
		if(!Number.isInteger(index)) throw new RangeError("Index must be a number")
		if(index < 0 || index > this._size) {
			throw new RangeError("Index out of bound for inserting")
		}

	}

	private _getNodeAt(index: number): Node<T> | null {
		for (let i = 0, refNode:Node<T> | null = this._head; i < this._size; i++) {
			if(i === index) {
				return refNode;
			}
			refNode = refNode?.next || null;
		}
	}

	insertAt = (index: number, value:T) => {
		this.assertInsertIndex(index);
		if(index === 0) return void this.insertAtFront(value);
		if(index === this._size) return void this.insertAtEnd(value);

		const prevNode = this._getNodeAt(index - 1);
		const newNode = new Node(value);
		newNode.next = prevNode?.next || null;
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
		if(this._size === 1) return void this.deleteAtFront();

		// 🔎 check value
		// Why GPT suggests: const value = (prev.next as ListNode<T>).value;
		const value = (this._tail as Node<T>).data || undefined;
		const prevNode: Node<T> | null = this._getNodeAt(this._size - 2);
		this._tail = prevNode;
		this._size--;
		(prevNode as Node<T>).next = null;

		return value;
	}

	deleteAt = (deleteIndex: number) => {
		if(deleteIndex < 0 || deleteIndex >= this._size) {
			throw new Error("Error: Index out of bound");
		}

		if(deleteIndex === 0) {
			this.deleteAtFront();
		}

		if(this._head) {
			let counter = 0;
			let pointer: Node<T> = this._head;
			while(counter <= deleteIndex) {
				// The modification should be done on the previous node
				if(counter + 1 === deleteIndex) {
					pointer.next = pointer.next?.next || null;
					this._size--;
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
		if(!this._size) {
			return false;
		}

		if(this._head) {
			let counter = 0;
			let pointer: Node<T> = this._head;
			while(counter < this._size) {
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
		if(!this._size) {
			return undefined;
		}

		if(getIndex < 0 || getIndex >= this._size) {
			throw new Error("Error: Index out of bound")
		}

		if(this._head) {
			let counter = 0;
			let pointer: Node<T> = this._head;
			while(counter < this._size) {
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

	isEmpty = () => {
		return !this._size;
	}

	printList = () => {
		let response: T[] = []

		let curr:Node = this._head;
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
			throw new Error("Error: the list has one or none elements, is not possible to reverse")
		}

		if(this._head && this._size > 1){
			const headRef = this._head;
			for (let index = 0; index < this._size - 1 ; index++) {
				const moveRef = headRef.next;
				headRef.next = moveRef.next;
				moveRef.next = this._head
				this._head = moveRef;
			}
		}
	}
}


// Analysis
