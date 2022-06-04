import { useState } from 'react';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const prop = props;
  // eslint-disable-next-line no-console
  // console.log(prop.handleChangeProps.name);
  const { completed, id, title } = prop.todo;
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li
      className={styles.item}
      key={id}
    >
      <div onDoubleClick={handleEditing} style={viewMode}>...</div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          prop.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}

      />
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => prop.handleChangeProps(id)}
      />
      <button type="button" onClick={() => prop.deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>

    </li>

  );
}

export default TodoItem;
