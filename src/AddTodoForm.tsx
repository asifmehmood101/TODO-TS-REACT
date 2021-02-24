import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddTodo } from './Types/types';

//props type
interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm = ({ addTodo }: AddTodoFormProps) => {
  const [newTodo, setNewTodo] = useState<string>('');

  //define changeEvent type
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  //define Submit type
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form>
      <input type='text' value={newTodo} onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>
        Add Todos
      </button>
    </form>
  );
};
