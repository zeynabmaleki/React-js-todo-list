import { useState } from 'react'
import './css/App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([1, 2, 3])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <div className='App'>
      <div className="todo-app">
        <h1>Todo List</h1>
        <TodoInput handleAddTodos={handleAddTodos}/>
        <TodoList todos={todos} />
      </div>
      <div className="footer">
        <p>Made with ❤️ by Your Name</p>
      </div>
    </div>

  )
}

export default App
