import { FaEraser } from "react-icons/fa";

export default function TodoTasks(props) {
  const { tasks, handleComplete, handleRemove, handleRemoveAll, setTasks } =
    props;

  const handleBlur = (e, index) => {
    const newText = e.target.innerText.trim();
    if (newText === tasks[index].task) return;

    const updatedTasks = [...tasks];
    updatedTasks[index].task = newText;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  return (
    <ul className="todo">
      {tasks.map((task, index) => (
        <li key={index}>
          <div className="checkAndTask">
            <label className="checkContainer">
              <input
                type="checkbox"
                onClick={() => handleComplete(index)}
                checked={task.completed}
                readOnly
              />
              <span className="checkmark"></span>
            </label>
            <span
              className={task.completed ? "completedTask" : "uncompletedTask"}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(e, index)}
              onKeyDown={handleKeyDown}
            >
              {task.task}
            </span>
          </div>
          <button className="trash" onClick={() => handleRemove(index)}>
            <FaEraser style={{ fontSize: "16px" }} />
          </button>
        </li>
      ))}
      {tasks.length > 0 && <hr className="endLine" />}
      {tasks.length > 1 && (
        <button className="button-49" onClick={handleRemoveAll}>
          Delete All <FaEraser style={{ fontSize: "16px" }} />
        </button>
      )}
    </ul>
  );
}
