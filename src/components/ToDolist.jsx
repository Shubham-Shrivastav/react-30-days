import React, { useState } from 'react';
import { Paper, TextField, Button, Stack } from '@mui/material';

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
        <Paper elevation={3} sx={{ padding: '20px', maxWidth: '400px', margin: '20px auto' }}>
            <h3>To Do List</h3>
            <form onSubmit={handleSubmit}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: '20px' }}>
                    <TextField
                        label="Task"
                        variant="outlined"
                        size="small"
                        value={taskInput}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        {editIndex !== null ? 'Update' : 'Add'}
                    </Button>
                </Stack>
            </form>

            <Stack spacing={2}>
                {tasksList.map((task, index) => (
                    <Stack direction="row" spacing={2} alignItems="center" key={index}>
                        {editIndex === index ? (
                            <Stack direction="row" spacing={3} alignItems="center">
                                <TextField
                                    value={taskInput}
                                    onChange={handleChange}
                                    size="small"
                                    variant="outlined"
                                />
                                <Button variant="contained" color="primary" onClick={handleSubmit}>
                                    Update
                                </Button>
                            </Stack>
                        ) : (
                            <Stack direction="row" spacing={2} alignItems="center">
                                <h4>{task}</h4>
                                <Button variant="outlined" size='small' onClick={() => handleEdit(index)}>
                                    Edit
                                </Button>
                                <Button variant="contained" size='small' color="error" onClick={() => handleDelete(index)}>
                                    Remove
                                </Button>
                            </Stack>
                        )}
                    </Stack>
                ))}
            </Stack>
        </Paper>
    );
}

export default TodoList;
