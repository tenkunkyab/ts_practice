/** @format */

namespace LinkListExample {
  class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
      this.data = data;
    }
  }

  class LinkedList<T> {
    head: Node<T> | null = null;

    append(data: T): void {
      if (!this.head) {
        this.head = new Node(data);
        return;
      }
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new Node(data);
    }

    delete(data: T): void {
      if (!this.head) return;

      // check if the head node is the node to
      // be removed
      if (this.head.data == data) {
        this.head = this.head.next;
        return;
      }

      // search for the node & remove
      let current = this.head.next;
      let prev = this.head;
      while (current) {
        if (current.data === data) {
          current = null;
        } else {
          prev = current;
          current = current.next;
        }
      }
    }

    traverse() {
      let current = this.head;
      while (current != null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  function solve(numbers: Array<number>, toRemove: number) {
    const linkedList = new LinkedList();
    numbers.forEach((number) => {
      linkedList.append(number);
    });
    linkedList.delete(toRemove);
    linkedList.traverse();
  }

  // solve([1,2,3], 3)
  console.log(`[8,1,1,4,12], 1`);
  solve([8, 1, 1, 4, 12], 1); //8->1->1->4->12->null, value = 1, return 8->4->12->null
  console.log(`[7,12,2,9], 7`);
  solve([7, 12, 2, 9], 7); // 7->12->2->9->null, value = 7, return 12->2->9->null
  console.log(`[7,12,2,9], 1`);
  solve([7, 12, 2, 9], 1); // 7->12->2->9->null, value = 7, return 7->12->2->9->null
}
