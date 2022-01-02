import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HCRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface HCRequestConfig extends AxiosRequestConfig {
  interceptors?: HCRequestInterceptors,
  showLoading?: boolean
}