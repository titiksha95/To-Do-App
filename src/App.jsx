import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import AllItems from "./Components/AllItems";
import { useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg";
import './index.css';


function App() {
  const [todoItems, seTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`New Item Added : ${itemName} on Date : ${itemDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDate }];
    seTodoItems(newTodoItems);
  };

  const handleDeleteItem = (TodoName ) => {
    const newTodoItems = todoItems.filter(item => item.name !== TodoName)
    seTodoItems(newTodoItems)
    console.log(`Item Deleted ${TodoName}`);
  };

  return (
    <div className="app-container">
      <AppName />
      <AddTodo handleNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg />}
      <AllItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </div>
  );
}

export default App;
