// {
//     "id": 1,
//     "task": "Watch Nightmare Before Christmas",
//     "dueDate": "2023-12-02",
//     "color": "red",
//     "isComplete": false
//   }

//Above: sample data, which helps to let me know what I'm working with. 

export default function TodoListItem(props) {
    const { task, dueDate, color, isComplete } = props;

    const parsedDate = new Date(dueDate)
    return (
        <li className="TodoListItem">
            <span>{task}</span>
            <span>{parsedDate.toLocaleDateString()}</span>
            {isComplete && <button>Mark as incomplete</button>}
            {!isComplete && <button>Mark as complete</button>}
            {/* <button>Edit</button> */}
            {isComplete && <button>Delete</button>}
        </li>
    );
}