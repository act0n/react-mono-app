import React, { useState } from 'react'
import { AddTodo, TodoList } from './components'
import { Todo } from './types/todo.type'
import { useInit } from './custom.hook'

function App() {
  const [list] = useInit()
  console.log(list)

  const [todoList, setTodoList] = useState<Todo[]>([])
  const deleteTodoItem = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id))
  }
  const toggleTodoItem = (id: number) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) item.completed = !item.completed
        return item
      })
    )
  }

  return (
    <div className="App">
      <fieldset>
        <legend>代办</legend>
        <AddTodo todoList={todoList} setTodoList={setTodoList}></AddTodo>
        <TodoList
          todoList={todoList}
          deleteTodoItem={deleteTodoItem}
          toggleTodoItem={toggleTodoItem}
        ></TodoList>
      </fieldset>
    </div>
  )
}

export default App
