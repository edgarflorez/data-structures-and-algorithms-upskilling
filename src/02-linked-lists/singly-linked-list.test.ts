import LinkedList from "./singly-linked-list";

describe("Linked List: Singly Linked List", () => {
	it("returns true on printList", () => {
		const myLinkedList = new LinkedList();
		const expected = [ 3, 2, 1 ];
		myLinkedList.insertAtFront(1)
		myLinkedList.insertAtFront(2)
		myLinkedList.insertAtFront(3)

		const result = myLinkedList.printList();

		expect(result).toStrictEqual(expected)

	})
})
