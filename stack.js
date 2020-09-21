/** @format */

// implementing the STACK data structure class
class Stack {
	constructor() {
		this.count = 0;
		this.items = {};
	}
	//pushing elements to the stack
	push(element) {
		this.items[this.count] = element;
		this.count++;
	}
	// removing last item from the stack
	pop() {
		if (this.isEmpty() === 0) {
			return undefined;
		}
		this.count--;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}
	// return the element from the top of the stack
	peek() {
		if (this.count === 0) {
			return undefined;
		}
		return this.items[this.count - 1];
	}
	// checking if the stack is empty
	isEmpty() {
		return this.count === 0;
	}
	// checking the length of the stack
	size() {
		return this.count;
	}
	// clearing the stack
	clear() {
		this.items = {};
		this.count = 0;
	}

	// creating toString method
	toString() {
		if (this.isEmpty()) {
			return "";
		}
		let objString = `${this.items[0]}`;
		for (let i = 1; i < this.count; i++) {
			objString = `${objString}, ${this.items}`;
		}
		return objString;
	}
}

// initialize class Stack

const stack = new Stack();

stack.push("John"); // add the first value
stack.push("Doe"); // add the second value
console.log(stack.size()); // check the size of the stack
console.log(stack.peek()); // check the top most element in respect with LIFO principle
console.log(stack.toString()); // convert the stack to string
stack.pop(); // remove the last item inthe stack
stack.clear(); // clear the stack completely
