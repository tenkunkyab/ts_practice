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
        current = current.next;
      }
    }

    middle() {
      let current = this.head,
        fastCurrent = this.head?.next;
      while(fastCurrent) {
        current = current?.next || null;
        fastCurrent = current?.next?.next;
      }
      return current?.data;
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

  function findMiddle(numbers: Array<number>) {
    const linkedList = new LinkedList();
    numbers.forEach((number) => {
      linkedList.append(number);
    });
    const middle = linkedList.middle()
    console.log({ middle })
  }

  // solve([1,2,3], 3)
  console.log(`[8,1,1,4,12], 1`);
  solve([8, 1, 1, 4, 12], 1); //8->1->1->4->12->null, value = 1, return 8->4->12->null
  console.log(`[7,12,2,9], 7`);
  solve([7, 12, 2, 9], 7); // 7->12->2->9->null, value = 7, return 12->2->9->null
  console.log(`[7,12,2,9], 1`);
  solve([7, 12, 2, 9], 1); // 7->12->2->9->null, value = 7, return 7->12->2->9->null

  /**
   * 1->2->3->null, return 2
      1->2->3->4->null, return 3
      1->null, return 1
   */
  findMiddle([1,2,3]); // 2
  findMiddle([1,2,3,4]); // 3
  findMiddle([1]); // 1
}
