// src/components/TaskList.js
function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className="task-item">
                    <span className={`task-title ${task.completed ? 'completed-task' : ''}`}>
                        {task.title}
                    </span>
                    <div>
                        <button
                            onClick={() => toggleTask(task.id)}
                            className="toggle-btn"
                        >
                            {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                        </button>
                        <button onClick={() => deleteTask(task.id)} className="delete-btn">
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
