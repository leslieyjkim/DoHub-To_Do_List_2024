import './App.scss'
import Footer from './components/Footer';
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
      <Footer />
    </>
  )
}

export default App
