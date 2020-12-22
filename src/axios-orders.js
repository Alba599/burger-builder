import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-13566-default-rtdb.firebaseio.com/',
})

export default instance;