import React, { useState } from 'react';

const InputTodo = (props) => {
  const prop = props;
  const [title, SetTitle] = useState('');
  const onChange = (e) => {
    SetTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetTitle('');
    prop.addTodoProps(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputTodo;
