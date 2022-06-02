import TodoItem from './TodoItem';

function TodosList(props) {
  const todos = props;

  return (
    todos.todo.map((item) => (
      <TodoItem
        key={item.id}
        todo={item}
        handleChangeProps={todos.handleChangeProps}
        deleteTodoProps={todos.deleteTodoProps}
      />
    ))

  );
}

export default TodosList;
