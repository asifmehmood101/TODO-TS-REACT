import React, { useState } from 'react';
import { initialTodos } from './initialTodos';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { Todo, ToggleComplete, AddTodo } from './Types/types';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
