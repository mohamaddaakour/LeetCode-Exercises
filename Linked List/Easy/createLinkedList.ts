class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null; 
    }
}

class LinkedList<T> {
    head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    append(value: T): void {
        const newNode = new ListNode(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    print(): void {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// let node = new ListNode(1);
let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.print();