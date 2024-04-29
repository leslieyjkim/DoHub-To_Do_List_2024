import './App.scss'
import Footer from './components/Footer';
import Header from "./components/Header";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoListItem'

import { todo1, todo2, todosObj } from './data/todoData'

function App() {
  // return (
  //   <>
  //     <Header />
  //     <main>
  //       <TodoForm />
  //       <TodoList />
  //     </main>
  //     <Footer />
  //   </>
  // )


  return <TodoList todos={todosObj} />  
  // return <TodoListItem {...todo1} />
}

export default App
 