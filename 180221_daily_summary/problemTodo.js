var todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]
function getId(){
  idVal = todos.map(function (item) {
    return item.id;
  });
  return idVal;
}
var ids = getId();
console.log(ids);

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3

// 1. Math.max 방법
function maxId() {
  return Math.max.apply(null, ids);
}

console.log(maxId());

function minId() {
  return Math.min.apply(null, ids);
}

console.log(minId());

// 2. sort 방법
// var getMaxid = getId.sort(function (a,b) { return b-a; });
// console.log(getMaxid[0]);


// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];


/* 1. unshift 방법
   todos.unshift({ id: 4, content: 'Test', completed: false });
*/

// 2. concat 방법1
// var newTodo = [{ id: 4, content: 'Test', completed: false }].concat(todos);

// 3. concat 방법2
var putTodo = { id: 4, content: 'Test', completed: false };

function addTodo(newTodo){
  return todos = [newTodo].concat(todos);
}

addTodo(putTodo);
console.log(todos);


// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// todos.shift();


function deleteId(id) {

  // 1. splice 방법
  /* todos.forEach(function (item, index, array) {
      if (item.id === id) todos.splice(index, 1);
     }); */

  // 2. filter 방법
  todos = todos.filter(function (todo){
    return todo.id !== id
  });
}
deleteId(4);
console.log(todos);


// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function complechange(id){
//   todos.forEach(function (item){
//     if (item.id === id) { item.completed = !item.completed};
//   });
// }
// complechange(3);
// console.log(todos);

function complechange(valueId){
  todos = todos.map(function (todo){
    return todo.id === valueId ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
}
complechange(2);
console.log(todos);


// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ];

function compleAllChange(){
  // 1. forEach 방법
  /*
  todos.forEach(function (todo) {
    item.completed = !item.completed;
  });
  */

  // 2. map 방법
  todos = todos.map(function (todo) {
    return  Object.assign({}, todo, { completed: !todo.completed });
  });
}
compleAllChange();
console.log(todos);


// 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라
function compleCount(){
  var countAll = todos.filter(function (item){
    return item.completed === true;
  });

  return countAll.length;
}
console.log(compleCount());

