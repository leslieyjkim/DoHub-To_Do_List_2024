 import './App.scss'
 import Header from "./components/Header";
import TodoForm from './components/TodoForm';

function App() {
  return (
    <>
    <Header />
    <main>
      <TodoForm />
      <section className="TodoList">
        <h1>All todos</h1>
        <ul>
          <li>
            <span>task</span>
            <span>date</span>
            <button>Mark as complete</button>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </section>
    </main>
    <footer>
      <p>All rights reserved 2024 MUHAHA</p>
    </footer>
    </>
  )
}

export default App
