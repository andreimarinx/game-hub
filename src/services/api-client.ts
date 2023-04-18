import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd3bf27040d4e40749717088b3a8b324c'
    }
})