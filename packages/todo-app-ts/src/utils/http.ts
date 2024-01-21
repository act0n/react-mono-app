import axios from 'axios'
import type { ReqConfig, RespConfig } from '../types/http.type'

export const http = axios.create({
  baseURL: 'http://localhost:3004',
  timeout: 15 * 1000
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export function fetchAPI<T>(config: ReqConfig) {
  return http.request<RespConfig<T>>(config)
}
