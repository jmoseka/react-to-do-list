// eslint-disable-next-line arrow-body-style
function TodosList(props) {
  const todos = props;
  console.log(todos);

  return (
    <ul>
      {todos.todos.map((todo) => (
        <li key={todo.title}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodosList;
