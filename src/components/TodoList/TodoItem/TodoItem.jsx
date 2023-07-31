import "./TodoItem.css"
function TodoItem({isFinished,task,dueDate}){
    return (
        <div className="form-control">
            <div className="cb-container">
                <input type="checkbox" checked={isFinished} />
            </div>
            <div className="tn-container">
                {task}
            </div>
            <div className="dd-container">
                {dueDate.getFullYear()}-{dueDate.getMonth()}-{dueDate.getDate()}
            </div>
        </div>
    )
}
export default TodoItem