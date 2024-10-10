import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Timer as TimerIcon, Close as CloseIcon } from '@mui/icons-material';

const Timer = () => {
  const [seconds, setSeconds] = useState(1500); // 25 min in seconds
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState('pomodoro');
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [shortBreakMinutes, setShortBreakMinutes] = useState(5);
  const [longBreakMinutes, setLongBreakMinutes] = useState(15);
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    if (activeTab === 'pomodoro') {
      setSeconds(sessionMinutes * 60);
    } else if (activeTab === 'shortBreak') {
      setSeconds(shortBreakMinutes * 60);
    } else if (activeTab === 'longBreak') {
      setSeconds(longBreakMinutes * 60);
    }
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsActive(false);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsActive(false);
    if (tab === 'pomodoro') {
      setSeconds(sessionMinutes * 60);
    } else if (tab === 'shortBreak') {
      setSeconds(shortBreakMinutes * 60);
    } else if (tab === 'longBreak') {
      setSeconds(longBreakMinutes * 60);
    }
  };

  const openSettingDialog = () => {
    console.log('Settings icon clicked');
    setShowSettingsDialog(true);
  };

  const closeSettingDialog = () => {
    setShowSettingsDialog(false);


    if (activeTab === 'pomodoro') {
      setSeconds(sessionMinutes * 60);
    } else if (activeTab === 'shortBreak') {
      setSeconds(shortBreakMinutes * 60);
    } else if (activeTab === 'longBreak') {
      setSeconds(longBreakMinutes * 60);
    }
  };
  return (
    <>
      {/* Settings Dialog */}
      <Dialog open={showSettingsDialog} onClose={closeSettingDialog}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>SETTING</Typography>
          <IconButton onClick={closeSettingDialog}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
            <TimerIcon sx={{ mr: 1 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>TIMER</Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>Time (minutes)</Typography>

          <Box display="flex" gap={2} sx={{ mb: 2 }}>
            <TextField
              label="Pomodoro"
              type="number"
              value={sessionMinutes}
              onChange={(e) => setSessionMinutes(Number(e.target.value))}
              variant="outlined"
              inputProps={{ min: 1 }}
              sx={{ width: '100px' }}
            />
            <TextField
              label="Short Break"
              type="number"
              value={shortBreakMinutes}
              onChange={(e) => setShortBreakMinutes(Number(e.target.value))}
              variant="outlined"
              inputProps={{ min: 1 }}
              sx={{ width: '100px' }}
            />
            <TextField
              label="Long Break"
              type="number"
              value={longBreakMinutes}
              onChange={(e) => setLongBreakMinutes(Number(e.target.value))}
              variant="outlined"
              inputProps={{ min: 1 }}
              sx={{ width: '100px' }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSettingDialog} color="primary" sx={{ color: 'grey' }}>
            Done
          </Button>
        </DialogActions>
      </Dialog>

      {/* Timer Box */}
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={4}
        bgcolor="#b74d4d"
        borderRadius={4}
        width="350px"
        boxShadow={3}
        margin="auto"
        mt="-1px"
        mb="-1px"

      >
        <IconButton onClick={openSettingDialog} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <SettingsIcon sx={{ color: 'white' }} />
        </IconButton>

        <Box display="flex" justifyContent="center" gap={2} mb={2}>
          <Button
            variant="text"
            onClick={() => handleTabChange('pomodoro')}
            sx={{
              color: activeTab === 'pomodoro' ? 'white' : '#f5eaea',
              backgroundColor: activeTab === 'pomodoro' ? '#914141' : 'transparent',
              fontWeight: activeTab === 'pomodoro' ? 'bold' : 'normal',
              textTransform: 'none',
            }}
          >
            Pomodoro
          </Button>
          <Button
            variant="text"
            onClick={() => handleTabChange('shortBreak')}
            sx={{
              color: activeTab === 'shortBreak' ? 'white' : '#f5eaea',
              backgroundColor: activeTab === 'shortBreak' ? '#914141' : 'transparent',
              fontWeight: activeTab === 'shortBreak' ? 'bold' : 'normal',
              textTransform: 'none',
            }}
          >
            Short Break
          </Button>
          <Button
            variant="text"
            onClick={() => handleTabChange('longBreak')}
            sx={{
              color: activeTab === 'longBreak' ? 'white' : '#f5eaea',
              backgroundColor: activeTab === 'longBreak' ? '#914141' : 'transparent',
              fontWeight: activeTab === 'longBreak' ? 'bold' : 'normal',
              textTransform: 'none',
            }}
          >
            Long Break
          </Button>
        </Box>
        <Typography variant="h2" color="white" sx={{ fontWeight: 'bold', mb: 2 }}>
          {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
        </Typography>
        <Button
          onClick={toggle}
          variant="contained"
          color="inherit"
          sx={{
            backgroundColor: '#f5eaea',
            color: '#914141',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            width: '150px',
            height: '50px',
          }}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
      </Box>
    </>
  );
};

export default Timer;
