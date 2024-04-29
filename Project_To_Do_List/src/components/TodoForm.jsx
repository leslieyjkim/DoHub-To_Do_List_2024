export default function TodoForm(props) {
    return (
        <section className="TodoForm">
            <button>Add a task</button>
            <form>
                <input type="text" name="task" placeholder="Enter the task" />
                <input type="color" name="color" placeholder="Enter the color" />
                <input type="date" name="dueDate" placeholder="Enter the due date" />
                <button>Add to-do</button>
            </form>
        </section>
    );
}