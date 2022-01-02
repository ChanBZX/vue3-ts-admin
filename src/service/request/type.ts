import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HCRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HCRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HCRequestInterceptors<T>,
  showLoading?: boolean
}