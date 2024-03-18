import { Todo } from "../core/Todo";

const getTodos = async () => {
  const response = await fetch(import.meta.env.VITE_TODOS_URL);
  return await response.json();
};

const deleteTodo = async (todo: Todo) => {
  const url = `${import.meta.env.VITE_TODOS_URL}/${todo.id}`;
  return await fetch(url, {
    method: "DELETE",
  });
};

export default {
  getTodos,
  deleteTodo,
};
