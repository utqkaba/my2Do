import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import ToDoTasks from "./components/todoTasks";
import DayMonthYear from "./components/dayMonthYear";
import { FaGithub } from "react-icons/fa";

export default function App() {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  console.log(tasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [formInput, setFormInput] = useState("");

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput !== "") {
      const date = new Date().toLocaleDateString();
      const newTask = {
        date: date,
        task: formInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setFormInput("");
    }
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    if (newTasks[index].completed === false) {
      newTasks[index].completed = true;
    } else {
      newTasks[index].completed = false;
    }
    setTasks(newTasks);
  };

  // const handleUpdate = (index) => {
  //   const newTasks = [...tasks]
  //   if (newTasks[index].completed === false) {
  //     newTasks[index].task = formInput
  //     console.log("deneme");
  //   } else {

  //   }
  // }

  const handleRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleRemoveAll = () => {
    setTasks([]);
  };

  return (
    <div className="generalContainer">
      <header className="header">
        <a
          className="goGit"
          href="https://github.com/utqkaba"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaGithub style={{ fontSize: "28px" }} />{" "}
        </a>
      </header>
      <DayMonthYear />
      <div className="toDoApp">
        <Form
          formInput={formInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <ToDoTasks
          tasks={tasks}
          handleComplete={handleComplete}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
}
