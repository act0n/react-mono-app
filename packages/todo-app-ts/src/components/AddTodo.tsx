import { useState } from 'react'
import { Todo } from '../types/todo.type'

interface AddTodoProps {
  todoList: Todo[]
  setTodoList: (list: Todo[]) => void
}

const AddTodo = ({ todoList, setTodoList }: AddTodoProps) => {
  const [text, setText] = useState<string>('')
  const addTodo = () => {
    const todoItem: Todo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodoList([...todoList, todoItem])
    setText('')
  }
  return (
    <div>
      <input type="input" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>新增</button>
    </div>
  )
}

export default AddTodo
