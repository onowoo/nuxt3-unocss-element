import { type UseFetchOptions, navigateTo, useFetch } from 'nuxt/app'
import { useStorage } from '@vueuse/core'
import { ElMessage } from 'element-plus'

type Methods = 'GET' | 'POST' | 'DELETE' | 'PUT'

const noLoginUrl = [
  '/addons/cms/api.common/init',
  '/addons/cms/api.common/captcha',
  '/addons/cms/api.ems/send',
  '/addons/cms/api.sms/send',
  '/addons/cms/api.archives/index',
  '/addons/cms/api.archives/detail',
  '/addons/cms/api.login/login',
  '/addons/cms/api.login/mobilelogin',
  '/addons/cms/api.login/register',
  '/addons/cms/api.login/resetpwd',
  '/addons/cms/api.login/wxLogin',
  '/addons/cms/api.login/appLogin',
  '/addons/cms/api.login/getWechatMobile',
  '/addons/cms/api.archives/get_channel',
  '/addons/cms/api.my/aboutus',
  '/addons/cms/api.my/agreement',
  '/addons/third/api/getAuthUrl',
  '/addons/third/api/callback',
  '/addons/third/api/account',
  '/addons/cms/api.search/index',
  '/addons/cms/api.tag/index',
  '/addons/cms/api.common/getCategory',
  '/addons/cms/api.user/getSigned',
  '/addons/cms/api.user/userInfo',
  '/addons/cms/api.comment/index',
  '/addons/vip/api.index/index',
  '/addons/cms/api.diyform/formList',
  '/addons/cms/api.diyform/show',
  '/addons/cms/api.diyform/index',
  '/addons/cms/api.common/selectpage',
  '/addons/cms/api.diyform/postForm',
  '/addons/cms/api.special/special',
  '/addons/cms/api.special/index',
  '/addons/cms/api.page/detail',
]

const BASE_URL = 'http://api.xunun.cn'

export interface IResultData<T> {
  code: number
  data: T
  msg: string
}

class HttpRequest {
  request<T = any>(
    url: string,
    method: Methods,
    data: any,
    options?: UseFetchOptions<T>,
  ) {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        baseURL: BASE_URL,
        url,
        method,
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token') ?? '',
          'user_id': localStorage.getItem('user') ?? '',
        },
        ...options,
      }

      if (method === 'GET' || method === 'DELETE')
        newOptions.params = data

      if (method === 'POST' || method === 'PUT')
        newOptions.body = data

      this.requestInterceptor(newOptions)

      useFetch(url, newOptions)
        .then((res) => {
          resolve(res)
          this.responseInterceptor(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // 请求拦截，配置Token等参数
  requestInterceptor(config: any) {
    // console.log('config',config);
    // 在需要登录的接口，请求前判断token 是否存在,不存在则到登录
    const url = config.url.split('?').shift()
    if (!noLoginUrl.includes(url) && !localStorage.getItem('token')) {
      navigateTo('/login')
      ElMessage({
        message: '请先登陆后再操作',
        duration: 3000,
      })
      return false
    }
    return config
  }

  // 响应拦截，判断状态码是否通过
  responseInterceptor(res: any) {
    // 返回__token__,设置

    const result = res.data.value

    switch (result.code) {
      case 1:
        return result
        break
      case 0:
        ElMessage({
          message: result.msg,
        })
        return result
        break
      case 401:
        // 需要登录的接口，当token 过期时，到登录页面
        ElMessage({
          message: result.msg,
        })
        // 跳转到登录页面的逻辑
        return result
        break
      case 403: // 没有权限访问
        ElMessage({
          message: result.msg,
        })
        return result
        break
      default:
        if (res.statusCode === 200) {
          return res.data
        }
        else {
          // 显示错误信息的逻辑
          return false
        }
    }
  }
  // 封装常用方法

  get<T = any>(config: { url: string, params?: any }, options?: UseFetchOptions<T>) {
    return this.request(config.url, 'GET', config.params, options)
  }

  post<T = any>(config: { url: string, data: any }, options?: UseFetchOptions<T>) {
    return this.request(config.url, 'POST', config.data, options)
  }
}

const httpRequest = new HttpRequest()

export default httpRequest
