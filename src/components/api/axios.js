import axios from 'axios';

export default axios.create({
    baseURL: 'https://twitter-clone-server-team9.herokuapp.com/users'
});