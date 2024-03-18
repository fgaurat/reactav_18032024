import React, { useState } from 'react'
import { Todo } from '../../core/Todo'

function TodoList() {
    console.log(import.meta.env.VITE_TODOS_URL)
    const [todos, setTodos] = useState<Todo[]>([
       
    ])

  return (
    <>
    <h2>TodoList</h2>

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

            <tr key={crypto.randomUUID()}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed}</td>
                <td></td>
            </tr>

        )}
        </tbody>

    </table>

    </>
  )
}

export default TodoList