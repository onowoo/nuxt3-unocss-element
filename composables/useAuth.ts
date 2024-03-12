import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', () => {
  const isLogin = ref(false)
  const loading = ref(true)
  const userInfo = ref({
    avatar: ''
  })

  // 获取用户信息的异步操作
  const fetchUserInfo = async () => {
    try {
        await nextTick()
        const res: any = await getUserIndex()
        // console.log(res.data.value);
        
        if (res.data.value.code === 1) { // 假设code为1表示成功
          userInfo.value = res.data.value.data.userInfo
          isLogin.value = true
        } else {
          // 处理错误或未登录状态
          console.error('获取用户信息失败:', res)
          isLogin.value = false
        }
      } catch (error) {
        console.error('请求用户信息异常:', error)
        isLogin.value = false
      }
  }

  return { isLogin, userInfo, loading}
})