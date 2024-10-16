import React, { useState } from 'react';
import { useTodoContext } from '../../context/TodoContext';
import { Todo } from '../../core/Todo';

const TodoList: React.FC = () => {
  const { state, addTodo, deleteTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo) return;

    const todo: Todo = { title: newTodo,completed:false }; // Assurez-vous que cela correspond à la structure de votre objet Todo
    await addTodo(todo);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Ajouter un todo"
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;