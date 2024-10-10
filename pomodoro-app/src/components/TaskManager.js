import React, { useState } from 'react';
import { Box, Card, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


function TaskManager() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() === ('')) {
            return
        }

        setTasks([...tasks, { name: newTask, completedPomodoros: 0, totalPomodoros: 1 }]);
        setNewTask('');
    };


    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);

    };

    return (
        <div>
            <Box display="flex"
                flexDirection="column"
                justifyContent="space-between"
                gap={2}
            >

                <Card sx={{ p: 1, mb: 1 }}>
                    <TextField
                        label="New Task"
                        value={newTask}
                        variant="standard"

                        onChange={(e) => setNewTask(e.target.value)}
                    />

                    <IconButton onClick={addTask} sx={{ mt: '7px', ml: '8px' }}>
                        <AddIcon />
                    </IconButton>




                </Card>

                {tasks.map((task, index) => (
                    <Card sx={{ p: 1, mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} key={index}>
                        <div>{task.name}</div>
                        <IconButton onClick={() => removeTask(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </Card>
                ))}

            </Box>
        </div>
    );



}

export default TaskManager;