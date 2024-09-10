var todoDatas = [
    {
        id: 1,
        todo: "아침먹기",
    },
    {
        id: 2,
        todo: "점심먹기",
    },
];
var addTodoData = function (todoText) {
    var newTodoId = todoDatas[todoDatas.length - 1].id + 1;
    var newTodo = {
        id: newTodoId,
        todo: todoText
    };
    todoDatas.push(newTodo);
    return todoDatas;
};
var addTodoList = function () {
    var $todoInput = document.querySelector("#todo-input");
    if ($todoInput !== null && $todoInput instanceof HTMLInputElement) {
        var todoText = $todoInput.value;
        $todoInput.value = "";
        var todoDatas_1 = addTodoData(todoText);
        todoListRender(todoDatas_1);
    }
    else {
        alert("페이지에 이상이 있습니다.");
    }
};
var $todoInputButton = document.querySelector("#todo-button");
$todoInputButton.addEventListener("click", addTodoList);
var createTodoLi = function (todoData) {
    // Li요소를 리턴해야한다.
    var $todoLi = document.createElement("li");
    var $todoP = document.createElement("p");
    $todoP.innerText = todoData.todo;
    $todoLi.append($todoP);
    return $todoLi;
};
// 데이터를 넣어주면 todoList를 만들어주는애
var todoListRender = function (todoDatas) {
    var $todoContainer = document.querySelector("#todo-container");
    $todoContainer.innerHTML = "";
    todoDatas.forEach(function (todoData) {
        var $todoLi = createTodoLi(todoData);
        $todoContainer.append($todoLi);
    });
};
todoListRender(todoDatas);
