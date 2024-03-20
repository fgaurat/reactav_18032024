import React from 'react'
import { TodoListProps } from '../TodoList/TodoList'

function HOCCompletedTodoList(TodoList:React.FC<TodoListProps>) {
  
  
    return ({todos,doDelete,isLoadingFetch,isLoadingDelete}:TodoListProps)=>{
        const completedTodos = todos.filter(t => t.completed)
        return <TodoList todos={completedTodos} doDelete = {doDelete} isLoadingFetch= {isLoadingFetch} isLoadingDelete={isLoadingDelete}/>
    }
}

export default HOCCompletedTodoList