class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length; 
  }

  get(pos) {

    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos - 1];
    }
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items)
    }
  }

  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.length
    }
  }

  sum() {
    return this.length == 0 ? 0 : this.items.reduce((accum, curr) => accum + curr)
  }
};
module.exports = SortedList;