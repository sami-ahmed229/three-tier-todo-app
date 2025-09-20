import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/api/tasks`, { title, description });
      setTitle('');
      setDescription('');
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (task) => {
    try {
      await axios.put(`${API_BASE}/api/tasks/${task.id}`, {
        title: task.title,
        description: task.description,
        status: task.status === 'completed' ? 'pending' : 'completed'
      });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE}/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="tasks-list">
        {tasks.map((task) => (
          <div key={task.id} className={`task ${task.status}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="task-actions">
              <button 
                onClick={() => updateTask(task)}
                className={task.status === 'completed' ? 'pending' : 'complete'}
              >
                {task.status === 'completed' ? 'Mark Pending' : 'Mark Complete'}
              </button>
              <button onClick={() => deleteTask(task.id)} className="delete">
                Delete
              </button>
            </div>
            <span className="status">Status: {task.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;