import { useEffect, useState } from 'react'
import type { TodoListType, TodoItemType } from './apis/list'
import { todoListRequest } from './apis/list'
import { fetchAPI } from './utils'

const useInit = function () {
  const [todoList, setTodoList] = useState<TodoItemType[]>([])
  useEffect(() => {
    fetchAPI<TodoListType>({ url: todoListRequest.url }).then((res) => {
      console.log(res.data.data.todoList)
      setTodoList(res.data.data.todoList)
    })
  }, [])

  return [todoList]
}

export { useInit }
