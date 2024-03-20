import { useState } from "react";
import { Todo } from "../core/Todo";
import service from "../services/todoService";


export default function useDeleteTodo(){
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const deleteTodo = async (todo:Todo)=>{
        setIsLoading(true)
        await service.deleteTodo(todo)
        setIsLoading(false)
    }

    return {deleteTodo,isLoading}
}