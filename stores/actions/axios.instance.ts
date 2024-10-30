import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  config => {
    const token: string | undefined = 'JWT_TOKEN'

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
 response => {
   return response.data
 },
 error => {
   return Promise.reject(error)
 }
)
