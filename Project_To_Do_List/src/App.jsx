 import './App.scss'
 import Header from "./components/Header";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <Header />
    <main>
      <TodoForm />
      <TodoList />
    </main>
    <footer>
      <p>All rights reserved 2024 MUHAHA</p>
    </footer>
    </>
  )
}

export default App
