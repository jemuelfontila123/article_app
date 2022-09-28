import axios from 'axios'

const baseUrl = "http://localhost:3000/articles" 


const getArticles = async() => {
    const response = await axios.get(baseUrl) 
    return response.data 
}

export default {
    getArticles 
}