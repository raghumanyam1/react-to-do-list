function Taskitem({ task, toggleTask, deleteTask }) {
  return (
    <li style={{ marginBottom: '8px' }}>
      <span style={{ textDecoration: task.isFinished ? 'line-through' : 'none', marginRight: '20px' }}>
        {task.text}
      </span>
      {task.isFinished ? (
        <span
          onClick={toggleTask}
          style={{ color: 'green', fontWeight: 'bold', cursor: 'pointer', fontSize: '20px', marginRight: '10px' }}
          title="Click to mark"
        >
          ✅ Done 
        </span>
      ) : (
        <button onClick={toggleTask} style={{ marginRight: '10px' }}>Finished</button>
      )}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default Taskitem;

