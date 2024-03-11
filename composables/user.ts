import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  //存储用户信息
  const userInfo = ref({
    "id": 0,
    "username": "",
    "nickname": "",
    "mobile": null,
    "avatar": "",
    "level": 1,
    "vip": 0,
    "gender": 0,
    "bio": "",
    "money": "0.00",
    "score": 0,
    "token": "",
    "user_id": 0,
    "createtime": 0,
    "expiretime": 0,
    "expires_in": 0,
    "vipInfo": [],
  })
  const isLogin = ref(false)

  //请求用户信息
  const getUser = async() => {
    try {
      await nextTick();
      const res:any = await getUserIndex()
      userInfo.value = res.data.value.data.userInfo
      return userInfo.value
    } catch (error) {
      // 处理错误情况
      console.error('请求用户信息失败', error);
    }
  }
  return {
    getUser,
    userInfo,
    isLogin
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
