import axios from 'axios'

const baseUrl = "http://localhost:3000/users"



const register = async (data) => {
  const response = await axios.post(baseUrl,data)
  
  return response.data 
} 


export default {
  register 
}