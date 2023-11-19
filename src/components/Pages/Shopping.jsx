import { Button, Paper, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shopping = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <>
            <Paper>
                <h1>Welcome to the Shopping Page!</h1>
                <p>Here you can display various products for users to shop.</p>
            </Paper>
            <Button size='small' type='submit' variant='outlined' onClick={handleLogout}>Logout</Button>

        </>);
};

export default Shopping;
