import Link from "next/link";
import { Todo } from "../../core/Todo";


interface TodoRowProps{
    todo:Todo;
    doDelete:(todo:Todo)=>void;
}

// function TodoRow(props:TodoRowProps) {
function TodoRow({todo,doDelete}:TodoRowProps) {

  return (
    <tr >
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed?"Oui":"Non"}</td>
      <td>
        <button className="btn btn-danger" onClick={()=>doDelete(todo)}>Delete</button>
        <Link className="btn btn-success" href={`/show/${todo.id}`}>Show</Link>
      </td>
    </tr>
  );
}

export default TodoRow;
