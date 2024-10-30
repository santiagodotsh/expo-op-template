import { axiosInstance } from './axios.instance'
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react'
import type { AxiosError, AxiosRequestConfig } from 'axios'

interface AxiosBaseQueryArgs {
  url: string
  method?: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
  headers?: AxiosRequestConfig['headers']
}

export function axiosBaseQuery(basePath?: string): BaseQueryFn<AxiosBaseQueryArgs> {
  return async ({ ...args }) => {
    const url: string[] = [axiosInstance.defaults.baseURL!.replace(/\/$/, '')]

    if (basePath) {
      url.push(basePath.replace(/^\/|\/$/g, ''))
    }

    url.push(args.url.replace(/^\/|\/$/g, ''))
    
    try {
      const data = await axiosInstance({
        url: url.join('/'),
        method: args.method,
        data: args.data,
        params: args.params,
        headers: args.headers
      })

      return { data }
    } catch (axiosError) {
      const err = axiosError as AxiosError

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      }
    }
  }
}
