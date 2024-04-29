export default function TodoList(props) {
    return (
        <section className="TodoList">
            <h1>All todos</h1>
            <ul>
                <li className="TodoListItem">
                    <span>task</span>
                    <span>date</span>
                    <button>Mark as complete</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </li>
            </ul>
        </section>
    );
}