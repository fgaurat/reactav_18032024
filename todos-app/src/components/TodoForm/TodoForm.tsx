import { useState } from "react";

function TodoForm() {
  
    // const [title, setTitle] = useState("Todo 01");
    // const [completed, setCompleted] = useState(false);
    const [form,setForm] = useState({
        title:"",
        completed:false
    })
    // const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>)=>{
    //     setTitle(e.target.value)
    // }
    // const onChangeCompleted = (e: React.ChangeEvent<HTMLInputElement>)=>{
    //     setCompleted(e.target.checked)
    // }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setForm({...form,[name]: value})
        console.log(form)
    }

    return (
    <>
      <h1>TodoForm</h1>

      {/* <input type="text" value={title} onChange={onChangeTitle}/>

      <input type="checkbox" checked={completed} onChange={onChangeCompleted}/> */}
      <input type="text" value={form.title} onChange={onChange} name="title"/>

      <input type="checkbox" checked={form.completed} onChange={onChange} name="completed"/>
    </>
  );
}

export default TodoForm;
