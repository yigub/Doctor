// 1.用户信息类型
type User = {
  id: string
  account: string
  avatar: string
  mobile: string
  refreshToken: string
  token: string
}

//2. 短信验证码类型，登录|注册|修改手机号|忘记密码|绑定手机号
type CodeType =
  | 'login'
  | 'register'
  | 'changeMobile'
  | 'forgetPassword'
  | 'bindMobile'

export { User, CodeType }
