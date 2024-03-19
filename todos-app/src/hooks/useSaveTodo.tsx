import { useState } from "react";
import { Todo } from "../core/Todo";
import service from "../services/todoService";


export default function useSaveTodo(){
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const saveTodo = async (todo:Todo)=>{
        setIsLoading(true)
        await service.saveTodo(todo)
        setIsLoading(false)
    }

    return {saveTodo,isLoading}
}