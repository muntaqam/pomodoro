import React from 'react';
import { Box, Typography } from '@mui/material';
import './App.css';
import Timer from './components/Timer';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#bf4f4f"
      
      
      

     
    >


      <Typography
        variant="h2"
        gutterBottom
        color="white"
        sx={{ fontFamily: 'Rubik Bubbles' }}
        mt={-20}
        
      
      >
        Pomodoro Timer
      </Typography>
      <Timer />
      <Box mt={6}> 
        <TaskManager />
      </Box>
    
    </Box>
  );
}

export default App;
