import TodoItem from './TodoItem';

function TodosList(props) {
  const todos = props;

  return (
    <TodoItem
      handleChangeProps={todos.handleChangeProps}
      key={todos.todo.id}
      todo={todos.todo}
    />
  );
}

export default TodosList;
