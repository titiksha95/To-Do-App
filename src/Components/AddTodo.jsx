import { useState } from "react";
import styles from './AddTodo.module.css'

function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setdueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };
  const handleAddClick = () => {
    handleNewItem(todoName, dueDate);
    setTodoName("");
    setdueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
          className={styles.inputName}
            type="text"
            placeholder="Enter TODO here!"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}
          className={styles.inputName} />
        </div>
        <div className="col-2 ">
          <button
            type="button"
            className={`${styles.add} btn btn-success`}
            onClick={handleAddClick}
            disabled={!todoName || !dueDate}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
