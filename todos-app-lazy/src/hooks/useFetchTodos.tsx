import { useEffect, useState } from "react"
import { Todo } from "../core/Todo"

import service from "../services/todoService"


export default function useFetchTodos(){
    const [todos, setTodos] = useState<Todo[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(()=>{
        // fetch(import.meta.env.VITE_TODOS_URL).then(resp=>resp.json()).then(setTodos )
        // const response = await fetch(import.meta.env.VITE_TODOS_URL)
        
        (async ()=>{
            setIsLoading(true)
            // const response = await fetch(import.meta.env.VITE_TODOS_URL)
            // const todos = await response.json()
            const todos = await service.getTodos()
            setIsLoading(false)
            setTodos(todos)
        })()


    },[])



    return {todos,setTodos,isLoading}
}