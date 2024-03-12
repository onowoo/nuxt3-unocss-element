import { defineNuxtRouteMiddleware, navigateTo } from '#imports'
import { useListTypesStore } from '~/composables/listTypes'

interface RouteParams {
  type?: string
  list?: string
  id?: string
}

export default defineNuxtRouteMiddleware((to, from) => {
  const listTypes = useListTypesStore()
  const allowedTypes = ref<string[]>(listTypes.allowedTypes)

  const params = to.params as RouteParams
  const type = params.type || params.list
  if (type && !allowedTypes.value.includes(type)) {
    return navigateTo({ path: '/404' })
  }
})
//通过menu点击访问正常，通过浏览器直接访问http://localhost:3000/product.html 会跳转到404，todo