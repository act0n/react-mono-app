export type TodoItemType = {
  id: number
  name: string
}

export type TodoListType = {
  todoList: TodoItemType[]
}

export const todoListRequest = {
  url: '/todoList'
}
