import axios from 'axios'

const URL = process.env.REACT_APP_URL
const api = axios.create({
    baseURL: URL,
    withCredentials: true, // This allows cookies to be sent with the request
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api