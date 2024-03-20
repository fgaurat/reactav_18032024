import React, { useEffect, useState } from 'react'
import { Todo } from '../../core/Todo'
import useFetchTodos from '../../hooks/useFetchTodos'
import TodoRow from './TodoRow'
import useDeleteTodo from '../../hooks/useDeleteTodo'



function TodoList() {
    const {todos,setTodos,isLoading:isLoadingFetch} = useFetchTodos()
    const {deleteTodo,isLoading:isLoadingDelete} = useDeleteTodo()

    
    const doDelete= async (todo:Todo)=>{
        await deleteTodo(todo)
        const t = todos.filter(o => o.id !==todo.id )
        setTodos(t)
    }
  return (
    <>
    <h2>TodoList</h2>

    {isLoadingFetch && isLoadingDelete && <p>Chargement ...</p>}
    
    {!isLoadingFetch && !isLoadingDelete &&
    <table className="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {todos.map( (todo:Todo) =>
        <TodoRow todo={todo} doDelete={doDelete} key={todo.id}/>

        )}
        </tbody>

    </table>}

    </>
  )
}

export default TodoList