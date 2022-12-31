//  定义用户端发起的各种API接口函数

import { request } from '@/utils/request'
import type { User, CodeType } from '@/types/user'

// 1.通过密码登录
export const loginByPassword = (password: string, mobile: string) => {
  return request<User>('/login/password', 'POST', { password, mobile })
}

// 2.获取手机号验证码
export const sendMobileCode = (mobile: string, type: CodeType) => {
  return request('/code', 'GET', { mobile, type })
}

// 3.通过手机验证码登录
export const loginByCode = (mobile: string, code: string) => {
  return request<User>('/login', 'POST', { mobile, code })
}
