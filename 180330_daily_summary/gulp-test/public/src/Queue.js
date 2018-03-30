function Queue(){
  var inArray = [];

  this.enqueue = function(number){
    inArray.push(number);
    console.log(inArray);
  }

  this.dequeue = function () {
    var temp = [];

    function pushData(){
      temp.push(inArray.pop());
      if (inArray.length === 1) {
        console.log(inArray[0]);
        inArray = [];
        return rePutData();
      }
      return pushData();
    }

    function rePutData(){
      inArray.push(temp.pop());
      if (temp.length === 0) {
        return console.log(inArray);
      }
      return rePutData();
    }
    return pushData();
  }
}