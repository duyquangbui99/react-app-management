# Task Management App - Quang Bui

## Overview

This is a simple task management application built as part of the Frontend Programming course (CSCI 6333 - Assignment 03). The app allows users to add, complete, delete tasks, and view task statistics. The main objective is to practice using core React hooks, such as useState, useEffect, useContext, useReducer, useRef, useMemo, and useCallback, as well as to implement a custom hook for data persistence with localStorage.

## Feature
- **Add Tasks**: Users can add new tasks by entering a title.
- **Complete/Uncomplete Tasks**: Users can mark tasks as completed or uncompleted.
- **Delete Tasks**: Users can delete individual tasks from the list.
- **Task Statistics**: The app displays the total number of tasks and the number of completed tasks.
- **User Context**: Simulates user-specific tasks by including a user login context.
- **Performance Optimizations**: Uses useCallback and useMemo to prevent unnecessary re-renders.
- **Persist Tasks**: A custom hook (useLocalStorage) is used to save tasks to localStorage, allowing them to persist across page reloads.

## Folder Structure
- **src/components**: Contains all the React components used in the app, such as TaskInput, TaskList, and TaskStats.
- **src/context**: Contains the UserContext used to manage user-specific data.
- **src/hooks**: Contains the custom hook useLocalStorage.
- **src/App.js**: Main application component, where the state and main logic are managed.
<img width="745" alt="0" src="https://github.com/user-attachments/assets/fb687b5d-af9e-44c4-8e6d-167043305077">
<img width="714" alt="1" src="https://github.com/user-attachments/assets/cffab79c-baaa-4c5f-96c9-7738b202c96a">
<img width="714" alt="2" src="https://github.com/user-attachments/assets/a96025d2-a858-4ddd-be9a-d2c53c6e3aec">
