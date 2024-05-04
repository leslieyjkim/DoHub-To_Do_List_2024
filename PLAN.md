# Todoinator

Todo! We should be able to add a task, due date, color code, mark them as complete, delete, (edit stretch)

## Data

### Todo

```jsx
const todo = {
  id: "",
  task: "",
  dueDate: "",
  color: "",
  isComplete: "",
};
```

### Todos

Array => Easy to show all of them
Object => Easy to access one of them

```jsx
const todos = { 1: todo, 2: todo };

const todos = [];
```

## Mock Data

```jsx
const todo1 = {
  id: 1,
  task: "Watch Nightmare Before Christmas",
  dueDate: "2023-12-02",
  color: "red",
  isComplete: false,
};
const todo2 = {
  id: 2,
  task: "Buy Xenoblade Chronicles",
  dueDate: "2023-12-03",
  color: "blue",
  isComplete: true,
};
const todo3 = {
  id: 3,
  task: "Take a screencap for attendance before the break",
  dueDate: "2023-11-30",
  color: "blue",
  isComplete: false,
};

const todosObj = { 1: todo1, 2: todo2, 3: todo3 };
const todosArr = [todo1, todo2, todo3];
```

## Data Actions

### Add todo

```jsx
const addTodoArr = (todos, todoInfo) => {
  const { task, dueDate, color } = todoInfo; //todos are lists of todo, todoInfo is new item 
  const id = Math.floor(Math.random() * 3272341390831); //random Id, not duplicated

  const newTodo = { id, task, dueDate, color, isComplete: false };

  const updatedTodos = [...todos, newTodo]; //not to mutate originals, make new array of all the current todos(spread), and add newTodo 

  return updatedTodos;
};

const addTodoObj = (todos, todoInfo) => {
  const { task, dueDate, color } = todoInfo;
  const id = Math.floor(Math.random() * 3272341390831);

  const newTodo = { id, task, dueDate, color, isComplete: false };

  const updatedTodos = { ...todos, [id]: newTodo };

  return updatedTodos;
};
```

### Edit todo

```jsx
const editTodoArr = (todos, todoId, todoInfo) => {
  const { task, dueDate, color } = todoInfo;

  const todoToChange = todos.find((todo) => todo.id === todoId);
  const updatedTodo = { ...todoToChange, task, dueDate, color }; //those added 3 things(task,dueDate,color) will overwrite the existing keys. It will not affect the ID

  const updatedTodos = [...todos];//not to mutate, spread the old todos and put them in new array. (assign new address)
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  updatedTodos[todoIndex] = updatedTodo; //Hey, updatedTodos, add the position of the todoIndex, I'd like to put the updatedTodo there. 

  return updatedTodos;
};

const editTodoObj = (todos, todoId, todoInfo) => {
  const { task, dueDate, color } = todoInfo;

  const updatedTodo = { ...todos[todoId], task, dueDate, color }; //directly access to the position of [todoId] in existing lists of todos. and overwrite those 3 things there.

  const updatedTodos = { ...todos, [todoId]: updatedTodo }; //

  return updatedTodos;
};
```

### Delete todo

```jsx
const deleteTodo = (todos, todoId) => {
  const updatedTodos = { ...todos };

  delete updatedTodos[todoId];

  return updatedTodos;
};
```

### Mark todo as complete (both activate button / deactivate button by 'toggling')

```jsx
const toggleTodoCompletion = (todos, todoId) => {
  const updatedTodo = { ...todos[todoId] };

  updatedTodo.isComplete = !updatedTodo.isComplete; //These are flipping the value arround. button activate vs de-activate whenever clicking. 

  const updatedTodos = { ...todos, [todoId]: updatedTodo }; //at the position of todoId
};
```

## Structure

### HTML

### Components

- Header
- TodoForm
- TodoList
  - TodoListItem
- Footer

### Component Data