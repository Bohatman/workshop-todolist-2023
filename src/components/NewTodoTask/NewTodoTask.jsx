import "./NewTodoTask.css"
import { useState } from "react";
function NewTodoTask({addNewTodo}){
    let [task,setTask] = useState("")
    let [date,setDate] = useState("")

    const clickHandler = () => {
        const newTodo = {
            task: task,
            dueDate: new Date(date),
        }
        addNewTodo(newTodo)
        setTask("")
        setDate("")
    }

    return (
        <div className="add-container">
            <div className="input-container">
                <div>
                    <label>Task</label>
                    <input type="text" value={task} onChange={(event)=>{setTask(event.target.value)}}></input>
                </div>
                <div>
                    <label>Due Date</label>
                    <input type="date" value={date} onChange={(event)=>{setDate(event.target.value)}}></input>
                </div>
            </div>
            <div className="add-button">
                <button onClick={clickHandler}>Add</button>
            </div>
        </div>
    );
}
export default NewTodoTask