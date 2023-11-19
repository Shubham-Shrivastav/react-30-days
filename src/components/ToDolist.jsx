import React, { useState } from 'react';

function TodoList() {
    const [taskInput, setTaskInput] = useState('');
    const [tasksList, setTasksList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        setTaskInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskInput.trim() !== '') {
            if (editIndex !== null) {
                const updatedTasks = tasksList.map((task, index) =>
                    index === editIndex ? taskInput.trim() : task
                );
                setTasksList(updatedTasks);
                setEditIndex(null);
            } else {
                setTasksList([...tasksList, taskInput.trim()]);
            }
            setTaskInput('');
        }
    };

    const handleDelete = (index) => {
        const updatedTasks = tasksList.filter((_, i) => i !== index);
        setTasksList(updatedTasks);
        if (editIndex === index) {
            setEditIndex(null);
        }
    };

    const handleEdit = (index) => {
        setTaskInput(tasksList[index]);
        setEditIndex(index);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task: </label>
                <input
                    type="text"
                    name="task"
                    value={taskInput}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
            </form>

            <ul>
                {tasksList.map((task, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={taskInput}
                                    onChange={handleChange}
                                />
                                <button type="button" onClick={handleSubmit}>
                                    Update
                                </button>
                            </>
                        ) : (
                            <>
                                <h4>{task}</h4>
                                <button type="button" onClick={() => handleEdit(index)}>
                                    Edit
                                </button>
                                <button type="button" onClick={() => handleDelete(index)}>
                                    Remove
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
