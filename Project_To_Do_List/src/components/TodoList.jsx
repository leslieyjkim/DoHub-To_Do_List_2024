import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
    return (
        <section className="TodoList">
            <h1>All todos</h1>
            <ul>
                <TodoListItem />
                <TodoListItem />
                <TodoListItem />
            </ul>
        </section>
    );
}