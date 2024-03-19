import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../core/Todo";
import service from "../../services/todoService";

export interface TodoListState {
  todos: Todo[];
  isLoading: boolean;
}

const initialState: TodoListState = {
  todos: [],
  isLoading: false,
};

export const fetchTodoList = createAsyncThunk("todos/fetch", async () => {
  const data = await service.getTodos();
  return data;
});

export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (todo: Todo) => {
    await service.deleteTodo(todo);
    return todo;
  }
);


export const deleteAndReloadTodo = createAsyncThunk(
  "todos/deleteAndReloadTodo",
  async (todo: Todo, thunkAPI: any) => {
    await service.deleteTodo(todo);
    thunkAPI.dispatch(fetchTodoList());
  }
);

export const saveTodo = createAsyncThunk(
  "todos/save",
  async (todo: Todo) => {
    const newTodo = await service.saveTodo(todo);
    return newTodo;
  }
);
export const saveAndReloadTodo = createAsyncThunk(
  "todos/saveAndReloadTodo",
  async (todo: Todo,thunkAPI:any) => {
    await service.saveTodo(todo);
    thunkAPI.dispatch(fetchTodoList());
  }
);

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<TodoListState>) => {
    builder
      .addCase(
        fetchTodoList.fulfilled,
        (state: TodoListState, action: PayloadAction<Todo[]>) => {
          state.todos = action.payload;
        }
      )
      .addCase(
        deleteTodo.fulfilled,
        (state: TodoListState, action: PayloadAction<Todo>) => {
          state.todos = state.todos.filter((t) => t.id !== action.payload.id);
        }
      )
      .addCase(
        saveTodo.fulfilled,
        (state: TodoListState, action: PayloadAction<Todo>) => {
          state.todos.push(action.payload)
        }
      );
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default todoListSlice.reducer;
