import { Todo } from '../../core/Todo'
import TodoRow from './TodoRow'

export interface TodoListProps{
  todos:Todo[]
  doDelete:(todo:Todo)=>void
  isLoadingFetch:boolean
  isLoadingDelete:boolean

}

function TodoList({todos,doDelete,isLoadingFetch,isLoadingDelete}:TodoListProps) {
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