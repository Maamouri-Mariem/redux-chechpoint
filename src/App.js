import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import FilterTasks from "./components/filter";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App m-5">
        <FilterTasks />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
