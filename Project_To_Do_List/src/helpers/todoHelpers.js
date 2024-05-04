//Copy-paste the pre-coded in PLAN.md of addTodoObj, editTodoObj, deleteTodo, toggleTodoCompletion

export const addTodoHelper = (todos, todoInfo) => {
    const { task, dueDate, color } = todoInfo;
    const id = Math.floor(Math.random() * 3272341390831);
  
    const newTodo = { id, task, dueDate, color, isComplete: false };
  
    const updatedTodos = { ...todos, [id]: newTodo };

    return updatedTodos;
  };

export const editTodoHelper = (todos, todoId, todoInfo) => {
    const { task, dueDate, color } = todoInfo;
  
    const updatedTodo = { ...todos[todoId], task, dueDate, color }; //directly access to the position of [todoId] in existing lists of todos. and overwrite those 3 things there.
  
    const updatedTodos = { ...todos, [todoId]: updatedTodo }; //
  
    return updatedTodos;
  };

export const deleteTodoHelper = (todos, todoId) => {
    const updatedTodos = { ...todos };
  
    delete updatedTodos[todoId];
  
    return updatedTodos;
  };

export const toggleTodoCompletion = (todos, todoId) => {
    const updatedTodo = { ...todos[todoId] };
  
    updatedTodo.isComplete = !updatedTodo.isComplete; //These are flipping the value arround. button activate vs de-activate whenever clicking. 
  
    const updatedTodos = { ...todos, [todoId]: updatedTodo }; //at the position of todoId

    return updatedTodos;
  };