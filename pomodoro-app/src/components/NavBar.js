import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = ({ activeTab }) => {
    // Determine the background color based on activeTab
    const getBackgroundColor = () => {
        switch (activeTab) {
            case 'pomodoro':
                return '#b74d4d'; // Pomodoro color
            case 'shortBreak':
                return '#9caf88'; // Short break color
            case 'longBreak':
                return '#3f51b5'; // Long break color
            default:
                return '#b74d4d'; // Default to Pomodoro color
        }
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: getBackgroundColor(), boxShadow: 'none', padding: '0 45px' }}>
            <Toolbar disableGutters>
                {/* Application Title */}
                <Typography
                    variant="h4"
                    color="white"
                    sx={{ fontFamily: 'Rubik Bubbles', textAlign: 'center', flexGrow: 1 }}
                >
                    Pomodoro Timer
                </Typography>
                {/* Account Icon */}
                <Box>
                    <IconButton color="inherit">
                        <AccountCircleIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
