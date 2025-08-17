import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const fetchTasks = async () => {
      if (!currentUser) return;
      const tasksCol = collection(db, 'tasks');
      const q = query(tasksCol, where('userId', '==', currentUser.uid));
      const snap = await getDocs(q);
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setTasks(list);
      setLoading(false);
    };
    fetchTasks();
  }, [currentUser]);

  const handleAddTask = async () => {
    if (taskTitle.trim() === '' || !currentUser) return;
    const tasksCol = collection(db, 'tasks');
    const docRef = await addDoc(tasksCol, {
      title: taskTitle.trim(),
      completed: false,
      userId: currentUser.uid,
    });
    setTasks([
      ...tasks,
      {
        id: docRef.id,
        title: taskTitle.trim(),
        completed: false,
        userId: currentUser.uid,
      },
    ]);
    setTaskTitle('');
  };

  const handleToggleCompletion = async (task) => {
    const taskRef = doc(db, 'tasks', task.id);
    await updateDoc(taskRef, { completed: !task.completed });
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDeleteTask = async (taskId) => {
    const taskRef = doc(db, 'tasks', taskId);
    await deleteDoc(taskRef);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='max-w-xl mx-auto p-4'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold'>Your Tasks</h2>
        <button
          onClick={logout}
          className='text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded'
        >
          Logout
        </button>
      </div>
      <div className='mb-4 flex'>
        <input
          type='text'
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder='Add a new task'
          className='border p-2 rounded flex-1 mr-2'
        />
        <button
          onClick={handleAddTask}
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Add
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : tasks.length === 0 ? (
        <p className='text-gray-600'>No tasks yet. Add one!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className='flex items-center justify-between mb-2 border rounded px-3 py-2'
            >
              <label className='flex items-center cursor-pointer'>
                <input
                  type='checkbox'
                  checked={task.completed}
                  onChange={() => handleToggleCompletion(task)}
                  className='mr-2'
                />
                <span
                  className={task.completed ? 'line-through text-gray-500' : ''}
                >
                  {task.title}
                </span>
              </label>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className='text-xs bg-red-500 text-white px-2 py-1 rounded'
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;