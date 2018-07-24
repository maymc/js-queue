/**
 * Queue Class
 * -----------------------------
 * A Queue data structure implemented as an ES6 class
 *
 * A queue is a data structure in which the first element is inserted from one end called
 * REAR (also called tail), and the deletion of existing element takes place from the other
 * end called as FRONT (also called head).  This makes queue a FIFO (first in first out), or
 * the element that is inserted first will always be the first to be removed.
 * You will be using an Object as an internal datastore.  Do not use an Array!
 *
 * There should be a constructor method with no arguments.
 *
 * Note that the _storage Object is OPTIONAL as there is a way to implement this exercise
 * without the _storage Object.
 *
 * @private {object} _storage              Default value should be an empty object. (Optional)
 * @private {number} _front                Default value should be set null.
 * @private {number} _back                 Default value should be set null.
 *
 */

class Queue {
  constructor() {
    this._storage = {};
    this._front = null;
    this._back = null;
  }

  size() {
    console.log("SIZE - back: " + this._back);
    console.log("SIZE - front: " + this._front);

    return this._back - this._front;
  }

  enqueue(item) {
    console.log("ENQUEUE - item: " + item);
    console.log("ENQUEUE - before back: " + this._back);
    console.log("ENQUEUE - before size: " + this.size());

    this._front = 0;
    this._storage[this.size()] = item;
    this._back++;
    console.log("ENQUEUE - after size: " + this.size());
  }

  dequeue() {
    if (this._front === null) {
      console.log("DEQUEUE - Empty queue, returning null");
      return null;
    } else {
      console.log("DEQUEUE - before front: " + this._front);
      let dequeuedItem = this._storage[this._front];

      //Set the new front/head to be the element behind the first element to be removed. Decrease the size of the queue by 1
      this._front++;
      console.log("DEQUEUE - after front: " + this._front);
      console.log("CHECK after dequeue - size: ", this.size());

      return dequeuedItem;
    }
  }

  peek() {
    console.log("PEEK - front: " + this._front);
    console.log("PEEK - back: " + this._back);
    if (this.size() === null) {
      return null;
    } else {
      let peekItem = this._storage[this._front];
      return peekItem;
    }
  }
}

/**
 * Queue Class Method => size()
 * -----------------------------
 * Returns the size of the queue.
 *
 * @name size
 * @return {Number}
 */

/**
 * Queue Class Method => enqueue(item)
 * -----------------------------
 * Puts an item in the queue.
 *
 * @name enqueue
 * @param item
 * @return {Number} returns the new size
 */

/**
 * Queue Class Method => dequeue()
 * -----------------------------
 * Takes an item off the queue and returns it.
 *
 * @name dequeue
 * @return {Object}   Note that everything in javascript is an Object.
 */

/**
 * Queue Class Method => peek()
 * -----------------------------
 * Returns the value of the first element without dequeueing.
 *
 * @name peek
 * @return {Object}   Note that everything in javascript is an Object.
 */

module.exports = Queue;
