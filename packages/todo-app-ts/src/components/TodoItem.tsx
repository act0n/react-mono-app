import { Todo } from '../types/todo.type'

type TodoItemProps = {
  todo: Todo
  deleteTodoItem: (id: number) => void
  toggleTodoItem: (id: number) => void
}

const TodoItem = ({ todo, deleteTodoItem, toggleTodoItem }: TodoItemProps) => {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.text}</span>
      <button onClick={() => deleteTodoItem(todo.id)}>删除</button>
      <button onClick={() => toggleTodoItem(todo.id)}> 完成</button>
    </li>
  )
}

export default TodoItem
