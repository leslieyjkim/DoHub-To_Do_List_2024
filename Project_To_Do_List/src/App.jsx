import { useState } from 'react';
import './App.scss'
import Footer from './components/Footer';
import Header from "./components/Header";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoListItem'

import { todo1, todo2, todosObj } from './data/todoData'

const fakeToggle = (todoId) => console.log("Function toggle was called", todoId);
const fakeDelete = (todoId) => console.log("Function delete was called", todoId);
const fakeSubmit = (todoInfo) => console.log("Function submit was called", todoInfo);

function App() {
  const [todos, setTodos] = useState(todosObj); //I'm gonna use the todosObj as a source, and I want to give my list to line 23. {todos}

  return (
    <>
      <Header />
      <main>
        <TodoForm />
        <TodoList todos={todos}/>
      </main>
      <Footer />
    </>
  )

  // return <TodoForm onSubmit={fakeSubmit}/>;
  // return <TodoList todos={todosObj} toggleTodo={fakeToggle} deleteTodo={fakeDelete} />  
  // return <TodoListItem {...todo1} toggleTodo={fakeToggle} deleteTodo={fakeDelete} />
}

export default App
 