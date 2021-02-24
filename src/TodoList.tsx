import React from 'react';
import { Todo, ToggleComplete } from './Types/types';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: ToggleComplete;
}

export const TodoList = ({ todos, toggleComplete }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};
