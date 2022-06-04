import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import Header from './Header';

function TodoContainer() {
  const todo = [
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: true,
    },
  ];

  const [todos, setTodos] = useState(todo);

  const handleChange = (id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((toDo) => toDo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4,
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const setUpdate = async (updateTitle, id) => {
    const newTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: updateTitle };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todo={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
}

export default TodoContainer;
