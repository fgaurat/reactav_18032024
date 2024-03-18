


const getTodos = async () =>{
    const response = await fetch(import.meta.env.VITE_TODOS_URL)
    return await response.json()
}


export default {
    getTodos
}