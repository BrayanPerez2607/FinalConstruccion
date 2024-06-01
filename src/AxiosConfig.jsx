import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/finalconstruccion/perros', // Ajusta la URL base a tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;