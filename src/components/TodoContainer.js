import TodosList from './TodosList';
import Header from './Header';

function TodoContainer() {
  const todo = [
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
      completed: true,
    },
  ];

  const handleChange = (id) => {
    // eslint-disable-next-line no-console
    console.log('clicked', id);
  };

  return (
    <div>
      <Header />
      <TodosList todo={todo} handleChangeProps={handleChange} />
    </div>
  );
}

export default TodoContainer;
