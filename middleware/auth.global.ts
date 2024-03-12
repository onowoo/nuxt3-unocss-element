export default async function () {
    const user = useAuthStore()
    await nextTick()
    if (process.client) {
        if (localStorage.getItem('token')) {
            const res: any = await getUserIndex()
            user.userInfo = res.data.value.data.userInfo
            user.isLogin = true 
            user.loading = res.pending.value
        }
    }
}