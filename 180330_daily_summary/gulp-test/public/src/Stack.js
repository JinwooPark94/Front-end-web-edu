function Stack() {
  var item;
  this.isEmpty = () => {
    return items.length === 0;
  };
  this.size = () => {
    return items.length;
  };
  this.print = () => {
    return console.log(items);
  };
  this.push = (el) => {
    items.push(el);
  }

  this.pop = () => {
    return items.pop();
  }


  this.peek = () => {
    return items[items.length - 1];
  }
}

