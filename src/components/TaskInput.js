// src/components/TaskInput.js
import React, { useState, useRef, useCallback } from 'react';

function TaskInput({ addTask }) {
    const [taskTitle, setTaskTitle] = useState('');
    const inputRef = useRef();

    const handleAddTask = useCallback(() => {
        if (taskTitle.trim()) {
            addTask(taskTitle);
            setTaskTitle('');
            inputRef.current.focus();
        }
    }, [taskTitle, addTask]);

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Add a new task"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TaskInput;
