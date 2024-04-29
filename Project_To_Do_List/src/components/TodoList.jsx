import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
    const {todos} =props;

    const parsedTodos = Object.values(todos).map(todo => (
        <TodoListItem key={todo.id} {...todo} />
    )); 

    return (
        <section className="TodoList">
            <h1>All todos</h1>
            <ul>{parsedTodos}</ul>
        </section>
    );
}