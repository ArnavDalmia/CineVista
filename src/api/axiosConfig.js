import axios from 'axios';

export default axios.create({
    baseURL:'http://192.168.2.37:8090',
    headers: {"ngrok-skip-browser-warning": "true"}
});
