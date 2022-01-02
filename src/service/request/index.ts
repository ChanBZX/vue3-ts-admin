import axios from "axios"
import type { AxiosInstance } from 'axios'
import type { HCRequestConfig, HCRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEAFULT_LOADING = true

class HCRequest {
  instance: AxiosInstance
  interceptors?: HCRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: HCRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加载中...',
          })
        }
        return config
      }, err => {
        return err
      })

    this.instance.interceptors.response.use((res) => {
      this.loading?.close()
      const data = res.data;
      if (data.returnCode === '-1001') {
        console.log('请求失败');
      } else {
        return data
      }
    }, err => {
      this.loading?.close()
      if (err.response.status === 404) {
        console.log('404的错误');
      }
      return err
    })
  }

  request<T>(config: HCRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 判断是否要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance.request<any, T>(config).then((res) => {
        // 1.单个请求对数据的处理
        if (config.interceptors?.responseInterceptor) {
          // res = config.interceptors.responseInterceptor(res)
        }
        // 2.将showLoading设置true，这样不会影响下一个请求
        this.showLoading = DEAFULT_LOADING
        resolve(res)
      }).catch(err => {
        this.showLoading = DEAFULT_LOADING
        reject(err)
        return err
      })
    })


  }

  get<T>(config: HCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HCRequest