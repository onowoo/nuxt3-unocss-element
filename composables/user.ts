import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  //存储用户信息
  let userInfo = ref({
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
  const userPending = ref(false)
  //请求用户信息
const getUser = async() => {
  try {
    await nextTick();
    const res:any = await getUserIndex()
    // console.log(res.data.value)
    userPending.value = res.pending.value
    userInfo.value = toRaw(res.data.value).data.userInfo

  } catch (error) {
    // 处理错误情况
    console.error('请求用户信息失败', error);
  }
}
  return {
    getUser,
    userInfo,
    userPending
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
