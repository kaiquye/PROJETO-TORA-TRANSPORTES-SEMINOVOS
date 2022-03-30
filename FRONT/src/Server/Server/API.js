import axios from 'axios'
import { getToken } from '../../adalConfig'

export const Axios = axios.create({
    baseURL : 'http://localhost:8010',
})
 