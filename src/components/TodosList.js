import TodoItem from './TodoItem';

function TodosList(props) {
  const todos = props;

  return (
    <ul>
      {todos.todos.map((todo) => (
        <TodoItem key={todo.id}>{todo.title}</TodoItem>
      ))}
    </ul>
  );
}

export default TodosList;
