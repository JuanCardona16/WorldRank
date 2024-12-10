import axios from 'axios'

export const ApiUrl = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
})