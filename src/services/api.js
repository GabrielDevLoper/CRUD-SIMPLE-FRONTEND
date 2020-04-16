import axios from 'axios';

const api = axios.create({
    baseURL: "https://crud-simple-backend.herokuapp.com",
});

export default api;