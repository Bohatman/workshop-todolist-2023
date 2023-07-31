import TodoItem from "./TodoItem/TodoItem";
export default function TodoList({todoList}){
    return (
        <div>
            { todoList.map((x)=>{
                return <TodoItem  key={x.id} task={x.task} isFinished={x.isFinished} dueDate={x.dueDate} />
            }) }
            {/* <TodoItem /> */}
            {/* <TodoItem /> */}
            {/* <TodoItem /> */}
        </div>
    );
}