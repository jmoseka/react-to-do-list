import React from 'react';

function TodoItem(props) {
  const prop = props;
  // eslint-disable-next-line no-console
  // console.log(prop.handleChangeProps.name);
  const { completed, id, title } = prop.todo;

  return (
    <ul>
      <li key={id}>
        {title}
        <input
          type="checkbox"
          checked={completed}
          onChange={() => prop.handleChangeProps(id)}
        />
        <button type="button" onClick={() => prop.deleteTodoProps(id)}>Delete</button>
      </li>
    </ul>

  );
}

export default TodoItem;
