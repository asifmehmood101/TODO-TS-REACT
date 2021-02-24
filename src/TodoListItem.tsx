import React from 'react';
import './TodoListItem.css';
import { Todo, ToggleComplete } from './Types/types';

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem = ({ todo, toggleComplete }: TodoListItemProps) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : ''}>
        <input
          type='checkbox'
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
    </li>
  );
};
