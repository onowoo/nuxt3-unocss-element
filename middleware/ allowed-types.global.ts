import { defineNuxtRouteMiddleware, navigateTo } from '#imports'
import { useListTypesStore } from '~/composables/listTypes'

interface RouteParams {
  type?: string
  list?: string
  id?: string
}


export default defineNuxtRouteMiddleware((to, from) => {
  const listTypes = useListTypesStore()
  const allowed = ref([])
  const getMenuList = async() => {
    try {
        await nextTick()
        const res: any = await getChannel()
        if (res.data.value.data) {
          listTypes.menu = res.data.value.data.channel
          allowed.value = res.data.value.data.channel.map((item: { diyname: string }) => item.diyname)
          const params = to.params as RouteParams
          const type = params.type || params.list
          // console.log(to,from);
          if (type && !allowed.value.includes(type as never)) {
            return navigateTo({ path: '/404' })
          }
        } else {
          console.error(res)
        }
    } catch (error) {
        console.error(error);
    }
  }
  getMenuList()



})
//通过menu点击访问正常，通过浏览器直接访问http://localhost:3000/product.html 会跳转到404，todo