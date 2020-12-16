import axios from 'axios'

const httpClient = axios.create({
  baseURL: '', // CHANGE to add the api url to post the form data
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient
