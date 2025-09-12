class Node<T> {
	data: T;
	next: Node<T> | null;

	constructor(x: T) {
		this.data = x;
		this.next = null;
	}
}

export default class LinkedList<J> {
	head: Node<J> | null;

	constructor() {
		this.head = null;
	}

	insertAtFront = (x:J) => {
		let newNode = new Node(x);
		if(!this.head) {
			this.head = newNode
			return;
		}

		newNode.next = this.head;
		this.head = newNode;
	}

	printList = () => {
		let response: J[] = []

		let curr:Node = this.head;
		while (curr !== null) {
			// process.stdout.write(curr.data.toString());
			response.push(curr.data);
			// if (curr.next !== null) {
			// 	process.stdout.write(" -> ");
			// }
			curr = curr.next;
		}
		return response;
	}
}


// Analysis
