import axios from 'axios'

const baseUrl = "http://localhost:3000/users"



const signIn = async (data) => {
  const response = await axios.post(`${baseUrl}/sign_in`,data)
  
  return response.data 
} 


export default {
  signIn
}