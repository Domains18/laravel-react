import axios from 'axios';

const axiosClient = axioscreate({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api`
});


//interceptors
axiosClient.interceptors.request.use(async (config) => {x
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN');
        window.location.href = '/login';
    } else {
        return Promise.reject(error);
    }
    // return Promise.reject(error);
});

// Path: react/src/axios.js

export default axiosClient;
