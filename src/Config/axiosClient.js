import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://vapzstore.onrender.com"
})

export default axiosClient;