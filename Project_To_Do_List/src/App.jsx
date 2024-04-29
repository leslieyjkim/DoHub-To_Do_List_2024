 import './App.scss'
 import Header from "./components/Header";

function App() {
  return (
    <>
    <Header />
    <main>
      <section className="TodoForm">
        <button>Add a task</button>
        <form>
          <input type="text" name="task" placeholder="Enter the task"/>
          <input type="color" name="color" placeholder="Enter the color"/>
          <input type="date" name="dueDate" placeholder="Enter the due date"/>
          <button>Add to-do</button>
        </form>
      </section>
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
