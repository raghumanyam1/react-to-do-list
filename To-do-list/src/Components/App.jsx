import { useState } from 'react';
import Taskform from './Taskform.jsx'
import Tasklist from './Tasklist.jsx'

function App(){
    const [tasks, setTasks] = useState([]);

    function addTask(text) {
        const newTask = {
            id: Date.now() + Math.random(),
            text: text,
            isFinished: false
        };
        setTasks([...tasks, newTask]);
    } 

    function toggleTask(id) {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, isFinished: !task.isFinished } : task
            )
        );
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <>
        <h1 style={{color: "blue", fontSize: "50px"}}>To-Do-List</h1>
        <br> </br>
        <h2>Add A Task</h2>
        <Taskform addTask={addTask}/>
        <Tasklist tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </>
    );
}

export default App;