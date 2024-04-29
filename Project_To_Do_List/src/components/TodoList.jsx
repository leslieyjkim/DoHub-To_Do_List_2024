import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
    const { todos, toggleTodo, deleteTodo } = props;

    const parsedTodos =
        todos &&                               //modify: Can you parse the todos if you actually have todos. If you don't, don't do it.
        Object.values(todos).map(todo => (
            <TodoListItem
                key={todo.id}
                {...todo}
                toggleTodo={() => toggleTodo(todo.id)}
                deleteTodo={() => deleteTodo(todo.id)} />
        ));
    //toggleTodo={() => toggleTodo(todo.id)} means, 
    //when todoListItem will call toggleTodo, I want to run toggleTodo with todo.id
    return (
        <section className="TodoList">
            <h1>All todos</h1>
            <ul>{parsedTodos}</ul>
        </section>
    );
}