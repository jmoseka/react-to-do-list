import React from 'react';

function TodoItem(props) {
  const prop = props;
  // eslint-disable-next-line no-console
  // console.log(prop.handleChangeProps.name);

  return (
    <ul>
      {prop.todo.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <input
            type="checkbox"
            checked={prop.todo.completed}
            onChange={() => prop.handleChangeProps(todo.id)}
          />
        </li>
      ))}
    </ul>

  );
}

export default TodoItem;
