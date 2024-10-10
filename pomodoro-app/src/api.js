import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';  //MAKE SURE TO CHANGE WHEN HOSTING!!!

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logSession = async (sessionData) => {
  try {
    const response = await axios.post(`${API_URL}/log_session`, sessionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getTimerHistory = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/timer_history/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
