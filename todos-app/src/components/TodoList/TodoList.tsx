import React, { useEffect, useState } from 'react'
import { Todo } from '../../core/Todo'
import useFetchTodos from '../../hooks/useFetchTodos'
import TodoRow from './TodoRow'



function TodoList() {
    const {todos,setTodos,isLoading} = useFetchTodos()
    
    const doDelete= (todo:Todo)=>{
        console.log(todo)
    }
  return (
    <>
    <h2>TodoList</h2>

    {isLoading && <p>Chargement ...</p>}
    
    {!isLoading && 
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