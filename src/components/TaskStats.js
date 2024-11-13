// src/components/TaskStats.js
import React, { useMemo } from 'react';

function TaskStats({ tasks }) {
    const totalTasks = tasks.length;
    const completedTasks = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);

    return (
        <div>
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
        </div>
    );
}

export default TaskStats;
