import LinkedList from "./singly-linked-list.ts";

describe("Linked List: Singly Linked List", () => {
	it("should return and empty array if no nodes added", () => {
		const myLinkedList = new LinkedList();
		const expected: number[] = [];

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected)
	})
})

describe("Linked List: Singly Linked List, inserting", () => {
	it("should return all the `numbers` inserted at the front", () => {
		const myLinkedList = new LinkedList();
		const expected = [ 3, 2, 1 ];
		myLinkedList.insertAtFront(1)
		myLinkedList.insertAtFront(2)
		myLinkedList.insertAtFront(3)

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected)
	})

	it("should return all the `strings` inserted at the front", () => {
		const myLinkedList = new LinkedList();
		const expected = [ "C", "B", "A" ];
		myLinkedList.insertAtFront("A")
		myLinkedList.insertAtFront("B")
		myLinkedList.insertAtFront("C")

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected)
	})

	it("should return all the mixed values inserted at the front", () => {
		const myLinkedList = new LinkedList();
		const expected = [ 1, "B", "A" ];
		myLinkedList.insertAtFront("A")
		myLinkedList.insertAtFront("B")
		myLinkedList.insertAtFront(1);

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected)
	})

	it('should return all the values inserted at the end', () => {
		const myLinkedList = new LinkedList();
		const expected = [1,2,3]
		myLinkedList.insertAtEnd(1)
		myLinkedList.insertAtEnd(2)
		myLinkedList.insertAtEnd(3)

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should return all the values after inserting at a given index, middle', () => {
		const myLinkedList = new LinkedList();
		const expected = [1,2,3]
		myLinkedList.insertAtEnd(1)
		myLinkedList.insertAtEnd(3)
		myLinkedList.insertAt(2, 1);

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should return all the values after inserting at a given index, front', () => {
		const myLinkedList = new LinkedList();
		const expected = [1,2,3]
		myLinkedList.insertAtEnd(2)
		myLinkedList.insertAtEnd(3)
		myLinkedList.insertAt(1, 0);

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should return all the values after inserting at a given index, end', () => {
		const myLinkedList = new LinkedList();
		const expected = [1,2,3]
		myLinkedList.insertAtEnd(1)
		myLinkedList.insertAtEnd(2)
		myLinkedList.insertAt(3, 2);

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should throw an error on inserting with a negative index', () => {
		const myLinkedList = new LinkedList();
		const expected = 'Error: Index out of bound'

		const result = () => {
			myLinkedList.insertAtEnd(1)
			myLinkedList.insertAtEnd(2)
			myLinkedList.insertAt(3, -1);
		};

		expect(result).toThrow(expected);
	})

	it('should throw an error on inserting -with a out of bound positive index', () => {
		const myLinkedList = new LinkedList();
		const expected = 'Error: Index out of bound'

		const result = () => {
			myLinkedList.insertAtEnd(1)
			myLinkedList.insertAtEnd(2)
			myLinkedList.insertAt(3, 10);
		};

		expect(result).toThrow(expected);
	})
})

describe("Linked List: Singly Linked List, deleting", () => {
	it('should delete the element in front', () => {
		const myLinkedList = new LinkedList();
		const expected = [2,3];
		myLinkedList.insertAtEnd(1)
		myLinkedList.insertAtEnd(2)
		myLinkedList.insertAtEnd(3)
		myLinkedList.deleteAtFront()

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should delete two recently added elements in front', () => {
		const myLinkedList = new LinkedList();
		const expected = [];
		myLinkedList.insertAtEnd(1);
		myLinkedList.insertAtEnd(2);
		myLinkedList.deleteAtFront();
		myLinkedList.deleteAtFront();

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should throw and error when try to delete at front on and empty Linked List', () => {
		const myLinkedList = new LinkedList();
		const expected = 'Error: is not possible delete on an empty Linked list';

		const result = () => {
			myLinkedList.insertAtEnd(1);
			myLinkedList.deleteAtFront();
			myLinkedList.deleteAtFront();
		};

		expect(result).toThrow(expected);
	})

	it('should delete the element at the end', () => {
		const myLinkedList = new LinkedList();
		const expected = [1,2];
		myLinkedList.insertAtEnd(1)
		myLinkedList.insertAtEnd(2)
		myLinkedList.insertAtEnd(3)
		myLinkedList.deleteAtEnd()

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should delete two recently added elements at the end', () => {
		const myLinkedList = new LinkedList();
		const expected = [];
		myLinkedList.insertAtEnd(1);
		myLinkedList.insertAtEnd(2);
		myLinkedList.deleteAtEnd();
		myLinkedList.deleteAtEnd();

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should throw and error when try to delete at front on and empty Linked List', () => {
		const myLinkedList = new LinkedList();
		const expected = 'Error: is not possible delete on an empty Linked list';

		const result = () => {
			myLinkedList.insertAtEnd(1);
			myLinkedList.deleteAtEnd();
			myLinkedList.deleteAtEnd();
		};

		expect(result).toThrow(expected);
	})

	it('should return a valid set of values after delete at a given index, middle', () => {
		const myLinkedList = new LinkedList();
		const expected = [1,3]
		myLinkedList.insertAtEnd(1)
		myLinkedList.insertAtEnd(2)
		myLinkedList.insertAtEnd(3)
		myLinkedList.deleteAt(1);

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should return a valid set of values after inserting at a given index, front', () => {
		const myLinkedList = new LinkedList();
		const expected = [2,3]
		myLinkedList.insertAtEnd(1)
		myLinkedList.insertAtEnd(2)
		myLinkedList.insertAtEnd(3)
		myLinkedList.deleteAt(0);

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should return a valid set of values after inserting at a given index, end', () => {
		const myLinkedList = new LinkedList();
		const expected = [1,2]
		myLinkedList.insertAtEnd(1)
		myLinkedList.insertAtEnd(2)
		myLinkedList.insertAtEnd(3)
		myLinkedList.deleteAt(2);

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})

	it('should throw an error on trying to delete a negative index', () => {
		const myLinkedList = new LinkedList();
		const expected = 'Error: Index out of bound'

		const result = () => {
			myLinkedList.insertAtEnd(1)
			myLinkedList.insertAtEnd(2)
			myLinkedList.deleteAt(-1);
		};

		expect(result).toThrow(expected);
	})

	it('should throw an error on trying to insert a out of bound positive index', () => {
		const myLinkedList = new LinkedList();
		const expected = 'Error: Index out of bound'

		const result = () => {
			myLinkedList.insertAtEnd(1)
			myLinkedList.insertAtEnd(2)
			myLinkedList.deleteAt(2);
		};

		expect(result).toThrow(expected);
	})
})

describe("Linked List: Singly Linked List, searching", () => {
	it('should return true when searching for a value in the liked list', () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront(1)
		myLinkedList.insertAtFront(2)
		myLinkedList.insertAtFront(3)
		const expected = true;

		const result = myLinkedList.search(2);

		expect(result).toStrictEqual(expected);
	})

	it('should return false when searching for a value not in the liked list', () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront(1)
		myLinkedList.insertAtFront(2)
		myLinkedList.insertAtFront(3)
		const expected = false;

		const result = myLinkedList.search(4);

		expect(result).toStrictEqual(expected);
	})

	it('should return false when searching on an empty liked list', () => {
		const myLinkedList = new LinkedList();
		const expected = false;

		const result = myLinkedList.search(1);

		expect(result).toStrictEqual(expected);
	})
})

describe("Linked List: Singly Linked List, getAt", () => {
	it("should get the value of a given index", () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront("a")
		myLinkedList.insertAtFront("b")
		myLinkedList.insertAtFront("c")
		const expected = "b";

		const result = myLinkedList.getAt(1);

		expect(result).toStrictEqual(expected);
	})
	it("should get undefined when trying to getAt on an empty Liked List", () => {
		const myLinkedList = new LinkedList();
		const expected = undefined;

		const result = myLinkedList.getAt(1);

		expect(result).toStrictEqual(expected);
	})
	it("should thrown an error for a index out of bound, upperbound", () => {
		const myLinkedList = new LinkedList();
		const expected = "Error: Index out of bound";

		const result = () => {
			myLinkedList.insertAtFront("a")
			myLinkedList.insertAtFront("b")
			myLinkedList.insertAtFront("c")
			myLinkedList.getAt(3)
		};

		expect(result).toThrow(expected);
	})
	it("should thrown an error for a index out of bound, lowerbound", () => {
		const myLinkedList = new LinkedList();
		const expected = "Error: Index out of bound";

		const result = () => {
			myLinkedList.insertAtFront("a")
			myLinkedList.insertAtFront("b")
			myLinkedList.insertAtFront("c")
			myLinkedList.getAt(-1)
		};

		expect(result).toThrow(expected);
	})
})


// const myLinkedList = new LinkedList();
// 		const expected = 'Error: Index out of bound'

// 		const result = () => {
// 			myLinkedList.insertAtEnd(1)
// 			myLinkedList.insertAtEnd(2)
// 			myLinkedList.insertAt(3, 10);
// 		};

// 		expect(result).toThrow(expected);
