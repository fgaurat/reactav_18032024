import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TodoList from './TodoList';

import "bootstrap/dist/css/bootstrap.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Orsys/TodoList',
  component: TodoList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { doDelete:fn() },
} satisfies Meta<typeof TodoList>;

export default meta;



type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const EmptyTodoList: Story = {
  args: {
    todos: [],
    
    isLoadingFetch:false,
    isLoadingDelete:false,
    
  },
};
export const TodoListWithData: Story = {
  args: {
    todos: [
      {
        "userId": 1,
        "id": "14",
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true
      },
      {
        "userId": 1,
        "id": "15",
        "title": "ab voluptatum amet voluptas",
        "completed": true
      },
      {
        "userId": 1,
        "id": "16",
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true
      }      
    ],
    
    isLoadingFetch:false,
    isLoadingDelete:false,
    
  },
};
