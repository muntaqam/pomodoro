import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';


const Timer = () => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0 && isActive) {
      clearInterval(interval);
      toggleBreak();
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(sessionMinutes * 60);
    setIsActive(false);
    setIsBreak(false);
  };

  const handleSessionChange = (e) => {
    setSessionMinutes(e.target.value);
    if (!isBreak) {
      setSeconds(e.target.value * 60);
    }
  };

  const handleBreakChange = (e) => {
    setBreakMinutes(e.target.value);
  };

  const toggleBreak = () => {
    setIsBreak(!isBreak);
    setSeconds(isBreak ? sessionMinutes * 60 : breakMinutes * 60);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={4}
      border={1}
      borderRadius={4}
      bgcolor="white"
      boxShadow={3}
    >
      <Typography variant="h4" gutterBottom>
        {isBreak ? 'Break Time' : 'Work Time'}
      </Typography>
      <Typography variant="h2">
        {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
      </Typography>
      <Box mt={3}>
        <Button
          onClick={toggle}
          variant="contained"
          color={isActive ? 'secondary' : 'primary'}
          sx={{ mr: 2 }}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={reset} variant="contained" color="warning">
          Reset
        </Button>
      </Box>
      <Box mt={4}>
        <TextField
          label="Session Length (minutes)"
          type="number"
          value={sessionMinutes}
          onChange={handleSessionChange}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Break Length (minutes)"
          type="number"
          value={breakMinutes}
          onChange={handleBreakChange}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default Timer;