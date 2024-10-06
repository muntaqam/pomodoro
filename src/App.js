import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f9f9f9"
    >


     <Typography variant="h3" gutterBottom>
        Pomodoro Timer
      </Typography>
      <Timer/>


    </Box>
  );
}

export default App;
