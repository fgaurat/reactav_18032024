import HOCCompletedTodoList from "../../components/HOCCompletedTodoList"
import TodoForm from "../../components/TodoForm"
import TodoList from "../../components/TodoList"
import { Todo } from "../../core/Todo"
import useDeleteTodo from "../../hooks/useDeleteTodo"
import useFetchTodos from "../../hooks/useFetchTodos"


function Home() {

  const {todos,setTodos,isLoading:isLoadingFetch} = useFetchTodos()
  const {deleteTodo,isLoading:isLoadingDelete} = useDeleteTodo()

  
  const doDelete= async (todo:Todo)=>{
      await deleteTodo(todo)
      const t = todos.filter(o => o.id !==todo.id )
      setTodos(t)
  }

  const CompletedTodoList = HOCCompletedTodoList(TodoList)

  return (
    <>
    <div className="container">
      <div className="row">
        <h1>Home</h1>
      </div>
      <div className="row">
        <div className="col">
          {/* <TodoList todos={todos} doDelete={doDelete} isLoadingFetch={isLoadingFetch} isLoadingDelete={isLoadingDelete}/> */}
          <CompletedTodoList todos={todos} doDelete={doDelete} isLoadingFetch={isLoadingFetch} isLoadingDelete={isLoadingDelete}/>

        </div>
        <div className="col"><TodoForm/></div>
      </div>
        
    </div>
    </>
  )
}

export default Home