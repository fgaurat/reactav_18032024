import { Todo } from '../../core/Todo'
import TodoRow from './TodoRow'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { useEffect } from 'react'
import { deleteAndReloadTodo, deleteTodo, fetchTodoList } from '../../features/todoList/todoListSlice'


export default function TodoList() {
  const {todos,isLoading} = useSelector((state: RootState) => state.theTodos)
  const dispatch = useDispatch<AppDispatch>()

    const doDelete= (todo:Todo)=>{
      // dispatch(deleteTodo(todo))
      dispatch(deleteAndReloadTodo(todo))
    }

    useEffect(() => {
      dispatch(fetchTodoList())
    }, [dispatch])
    

  return (
    <>
    <h2>TodoList</h2>
    {isLoading && <p>Chargement ...</p>}
    {!isLoading  &&
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

