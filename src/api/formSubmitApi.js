import httpClient from './httpClient'

const ENDPOINT = '/'
// function that can be imported and used to POST the data to the api endpoint
const submitForm = (formData) => httpClient.post(ENDPOINT, formData)

export {
  submitForm
}
