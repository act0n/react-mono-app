import TodoItem from './TodoItem'
import { Todo } from '../types/todo.type'

interface TodoListProps {
  todoList: Todo[]
  deleteTodoItem: (id: number) => void
  toggleTodoItem: (id: number) => void
}

const TodoList = ({ todoList, deleteTodoItem, toggleTodoItem }: TodoListProps) => {
  return (
    <ul>
      {todoList.map((item: Todo) => (
        <TodoItem
          key={item.id}
          todo={item}
          deleteTodoItem={deleteTodoItem}
          toggleTodoItem={toggleTodoItem}
        ></TodoItem>
      ))}
    </ul>
  )
}

export default TodoList
