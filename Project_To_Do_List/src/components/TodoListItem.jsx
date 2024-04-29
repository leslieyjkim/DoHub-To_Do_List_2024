export default function TodoListItem(props) {
    return (
        <li className="TodoListItem">
            <span>task</span>
            <span>date</span>
            <button>Mark as complete</button>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    );
}