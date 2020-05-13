import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-food-builder-5dfbf.firebaseio.com/'
})

export default instance