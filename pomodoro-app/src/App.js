import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import './App.css';
import Timer from './components/Timer';
import TaskManager from './components/TaskManager';
import NavBar from './components/NavBar';

function App() {
  const [activeTab, setActiveTab] = useState('pomodoro');

  return (

    <>

      <NavBar activeTab={activeTab} />



      <Box
        className={`${activeTab}-bg`} // Apply CSS class based on active tab to the entire page
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >

        <Timer activeTab={activeTab} setActiveTab={setActiveTab} /> {/* Pass activeTab and setActiveTab */}
        <Box mt={6}>
          <TaskManager />
        </Box>
      </Box></>
  );
}

export default App;
