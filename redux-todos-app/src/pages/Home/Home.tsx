import TodoList from "../../components/TodoList"


function Home() {
  return (
    <>
    <div className="container">
      <div className="row">
        <h1>Home</h1>
      </div>
      <div className="row">
        <div className="col"><TodoList/></div>
      </div>
        
    </div>
    </>
  )
}

export default Home