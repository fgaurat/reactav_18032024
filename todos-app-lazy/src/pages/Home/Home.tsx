import { Suspense, lazy } from "react";

// import TodoForm from "../../components/TodoForm"
// import TodoList from "../../components/TodoList"

const TodoForm = lazy(() => import("../../components/TodoForm"));
const TodoList = lazy(() => import("../../components/TodoList"));

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Home</h1>
        </div>
        <div className="row">
          <div className="col">
            <Suspense fallback={<p>Chargement de la liste ...</p>}>
              <TodoList />
            </Suspense>
          </div>
          <div className="col">
            <Suspense fallback={<p>Chargement du formulaire ...</p>}>
              <TodoForm />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
