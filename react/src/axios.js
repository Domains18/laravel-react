import axios from 'axios';

const axiosClient = axioscreate({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api`
});


//interceptors
axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Path: react/src/axios.js

export default axiosClient;
