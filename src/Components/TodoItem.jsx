import styles from "./TodoItem.module.css";
function TodoItem({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <div className="container  ">
      <div className="row kg-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2 ">
          {/* <button type="button" className={`${styles.deleteBtn}`}> */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(TodoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
