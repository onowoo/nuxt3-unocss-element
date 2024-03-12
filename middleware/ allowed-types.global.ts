import { defineNuxtRouteMiddleware, navigateTo } from '#imports'
import { useListTypesStore } from '~/composables/listTypes'

interface RouteParams {
  type?: string
  list?: string
  id?: string
}

export default defineNuxtRouteMiddleware((to, from) => {
  const listTypes = useListTypesStore()
  // Explicitly declare the type of the ref's value as string[]
  const allowedTypes = ref<string[]>(listTypes.allowedTypes)
console.log(listTypes);

  const params = to.params as RouteParams
  const type = params.type || params.list
  if (type && !allowedTypes.value.includes(type)) {
    return navigateTo({ path: '/404' })
  }
})