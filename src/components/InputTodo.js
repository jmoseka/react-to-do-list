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
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
