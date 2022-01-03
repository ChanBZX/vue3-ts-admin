// service统一出口
import HCRequest from "./request"
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '../utils/cache'

const hcRequest = new HCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token拦截
      const token = localCache.getCache('token')
      if (token && config) {
        // @ts-ignore
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }


  }
})

export default hcRequest