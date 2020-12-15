import axios from 'axios'

const httpClient = axios.create({
  baseURL: '', // PENDING THE URL TO COMMUNICATE WITH
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient
