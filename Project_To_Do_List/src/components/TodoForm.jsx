import {useState} from "react";

export default function TodoForm(props) {

    const {onSubmit} = props; //I'll receive the submit prop there
    
    const [ isActive, setIsActive ] = useState(false);
 
    const toggleForm = () => setIsActive(!isActive);

    return (
        <section className="TodoForm">
            {!isActive && <button onClick={toggleForm}>Add a to-do</button>}
            {isActive && (
                <form>
                    <input type="text" name="task" placeholder="Enter the task" />
                    <input type="color" name="color" placeholder="Enter the color" />
                    <input type="date" name="dueDate" placeholder="Enter the due date" />
                    <button>Add to-do</button>
                </form>
            )}
        </section>
    );
} 