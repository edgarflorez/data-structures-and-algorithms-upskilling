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

		const result = myLinkedList.search(2);

		expect(result).toBeTruthy();
	})
	it('should return false when searching for a value not in the liked list', () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront(1)
		myLinkedList.insertAtFront(2)
		myLinkedList.insertAtFront(3)

		const result = myLinkedList.search(4);

		expect(result).toBeFalsy();
	})
	it('should return false when searching on an empty liked list', () => {
		const myLinkedList = new LinkedList();

		const result = myLinkedList.search(1);

		expect(result).toBeFalsy();
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

		const result = myLinkedList.getAt(1);

		expect(result).toBeUndefined();
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

describe("Linked List: Singly Linked List, size", () => {
	it("should get size after inserting with different methods", () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront(1)
		myLinkedList.insertAtEnd(2)
		myLinkedList.insertAt(3, 1);

		const expected = 3;

		const result = myLinkedList.size;

		expect(result).toStrictEqual(expected);
	})
	it("should get size after inserting and deleting with different methods", () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront(1)
		myLinkedList.insertAtFront(2)
		myLinkedList.insertAtFront(3)
		myLinkedList.insertAtFront(4)
		myLinkedList.deleteAtFront();
		myLinkedList.deleteAtEnd();
		myLinkedList.deleteAt(1);

		const expected = 1;

		const result = myLinkedList.size;

		expect(result).toStrictEqual(expected);
	})
	it("should get size after inserting and deleting the same number of elements", () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront(1)
		myLinkedList.insertAtEnd(2)
		myLinkedList.insertAt(3, 1);
		myLinkedList.deleteAt(1);
		myLinkedList.deleteAtFront()
		myLinkedList.deleteAtEnd()

		const expected = 0;

		const result = myLinkedList.size;

		expect(result).toStrictEqual(expected);
	})
	it("should get a size of 0 for a new LinkedList", () => {
		const myLinkedList = new LinkedList();

		const expected = 0;

		const result = myLinkedList.size;

		expect(result).toStrictEqual(expected);
	})

describe("Linked List: Sindgly Linked List, isEmpty", () => {
	it('should check if the Linked List is empty', () => {
		const myLinkedList = new LinkedList();

		const result = myLinkedList.isEmpty();

		expect(result).toBeTruthy();
	})
	})
	it('should check if the Linked List is NOT empty', () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront(1);

		const result = myLinkedList.isEmpty();

		expect(result).toBeFalsy();
	})
})

describe("Linked List: Singly Linked List, printList", () => {
	it('should print the items added to a Liked List', () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtEnd(1)
		myLinkedList.insertAtEnd(2)
		const expected = [1,2];

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})
	it('should print an empty list for an empty Linked List', () => {
		const myLinkedList = new LinkedList();
		const expected = [];

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	})
})

describe("Linked List: Singly Linked List, reverse", () => {
	it('reverse a liked list in place', () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront(1);
		myLinkedList.insertAtFront(2);
		myLinkedList.insertAtFront(3);
		const expected = [1,2,3];

		myLinkedList.reverse();
		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	} )
	it('reverse a liked list in place, minimum elements - TWO', () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront(1);
		myLinkedList.insertAtFront(2);
		const expected = [1,2];

		myLinkedList.reverse();
		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected);
	} )
	it('should throw and error for linked list with one element', () => {
		const myLinkedList = new LinkedList();
		myLinkedList.insertAtFront(1);
		const expected = "Error: the list has one or none elements, is not possible to reverse";

		const result = () => {
			myLinkedList.reverse();
		}

		expect(result).toThrow(expected);
	} )
	it('should throw and error for linked list with no elements', () => {
		const myLinkedList = new LinkedList();
		const expected = "Error: the list has one or none elements, is not possible to reverse";

		const result = () => {
			myLinkedList.reverse();
		}

		expect(result).toThrow(expected);
	} )
})
