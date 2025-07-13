import TodoItem from "./TodoItem";
import styles from "./AllItems.module.css";

const AllItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map((item) => (
          <TodoItem
            TodoName={item.name}
            TodoDate={item.date}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default AllItems;
