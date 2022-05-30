import TodosList from './TodosList';

function TodoContainer() {
  const todos = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];

  return (
    <div>
      <TodosList todos={todos} />
    </div>
  );
}

export default TodoContainer;
