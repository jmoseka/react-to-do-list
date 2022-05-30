import React from 'react';

function TodoItem(props) {
  const prop = props;
  return <li>{prop.children}</li>;
}

export default TodoItem;
