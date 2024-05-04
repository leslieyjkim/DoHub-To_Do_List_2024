import { useState } from 'react';
import useWow from "./hooks/useWow"
import './App.scss'
import Footer from './components/Footer';
import Header from "./components/Header";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoListItem'

import { todo1, todo2, todosObj } from './data/todoData'

// const fakeToggle = (todoId) => console.log("Function toggle was called", todoId);
// const fakeDelete = (todoId) => console.log("Function delete was called", todoId);
// const fakeSubmit = (todoInfo) => console.log("Function submit was called", todoInfo);

import {addTodoHelper, editTodoHelper, deleteTodoHelper, toggleTodoCompletion } from "./helpers/todoHelpers"

function App() {
  const [todos, setTodos] = useState(todosObj); //I'm gonna use the todosObj as a source, and I want to give my list to line 23. {todos}

  const {sayWow} = useWow();
  //To use the Helpers, it's gonna be straightforward below;
  const toggleTodo = (todoId) => {                            //I need to know about the 'todoId'
    const updatedTodos = toggleTodoCompletion(todos, todoId)   //'todos' is state.

    setTodos(updatedTodos);  //and then, I'm gonna set my state to confirm the change. 
  }

  const addTodo = (todoInfo) => {
    const updatedTodos = addTodoHelper(todos, todoInfo)

    setTodos(updatedTodos);
    sayWow();
  }

  const deleteTodo = (todoId) => {
    const updatedTodos = deleteTodoHelper(todos, todoId)

    setTodos(updatedTodos);
  }


  return (
    <>
      <Header />
      <main>
        <TodoForm onSubmit={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </main>
      <Footer />
    </>
  )

  // return <TodoForm onSubmit={fakeSubmit}/>;
  // return <TodoList todos={todosObj} toggleTodo={fakeToggle} deleteTodo={fakeDelete} />  
  // return <TodoListItem {...todo1} toggleTodo={fakeToggle} deleteTodo={fakeDelete} />
}

export default App
 