import Taskitem from './Taskitem.jsx';

function Tasklist({ tasks, toggleTask, deleteTask }) {
    return(
        <div>
            <h2>Added Tasks</h2>

            <ul>
                {tasks.map((task) => (
                    <Taskitem 
                        key={task.id} 
                        task={task} 
                        toggleTask={() => toggleTask(task.id)}
                        deleteTask={() => deleteTask(task.id)} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default Tasklist;