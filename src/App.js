import React, { useReducer, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import UserGreeting from './components/UserGreeting';
import { UserProvider } from './context/UserContext';
import useLocalStorage from './hooks/useLocalStorage';
import './index.css';

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), title: action.payload, completed: false }];
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}

function App() {
  // Step 1: Retrieve initial tasks from localStorage using useLocalStorage
  const [persistedTasks, setPersistedTasks] = useLocalStorage('tasks', []);

  // Step 2: Initialize the reducer with persistedTasks as the initial state
  const [tasks, dispatch] = useReducer(taskReducer, persistedTasks);

  // Step 3: Update localStorage whenever tasks change
  useEffect(() => {
    setPersistedTasks(tasks);
  }, [tasks, setPersistedTasks]);

  const addTask = (title) => dispatch({ type: 'ADD_TASK', payload: title });
  const toggleTask = (id) => dispatch({ type: 'TOGGLE_TASK', payload: id });
  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', payload: id });

  return (
    <UserProvider>
      <div className="App">
        <UserGreeting />
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        <TaskStats tasks={tasks} />
      </div>
    </UserProvider>
  );
}

export default App;
