import './App.css'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import NewTodoTask from './components/NewTodoTask/NewTodoTask'
import { useState } from 'react';
let initialId = 4;
function uniqueId(){
  initialId = initialId + 1;
  return initialId
}
function App() {
  const todoList = [
    {
      id: 1,
      task: "Read a book",
      dueDate: new Date("2023-02-28"),
      isFinished: false,
    },
    {
      id: 2,
      task: "Buy dog food",
      dueDate: new Date("2024-06-14"),
      isFinished: true,
    },
    {
      id: 3,
      task: "Go to cinema",
      dueDate: new Date("2023-05-20"),
      isFinished: true,
    },
    {
      id: 4,
      task: "Print homework",
      dueDate: new Date("2024-07-26"),
      isFinished: true,
    }
  ]
  let [todoListState,setTodoListState] = useState(todoList)
  const addNewTodo= (todo) => {
    const newTodoData = {
      ...todo,
      isFinished: false,
      id: uniqueId(),
    }
    let temp = todoListState.slice()
    temp.push(newTodoData)
    setTodoListState(temp)
  }
  return (
    <div className="App">
      {/* Header here */}
      <Header/>
      <NewTodoTask addNewTodo={addNewTodo}/>
      {/* Todo list here*/}
      <TodoList todoList={todoListState}/>
    </div>
  )
}

export default App
