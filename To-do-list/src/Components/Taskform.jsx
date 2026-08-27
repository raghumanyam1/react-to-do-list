import { useState } from "react";

function Taskform({ addTask }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!text.trim()) return;

    addTask(text.trim());
    setText("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Task: </label>

        <input
          type="text"
          placeholder=" enter a task"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

        <button type="submit">Add</button>

      </form>
    </div>
  );
}

export default Taskform;