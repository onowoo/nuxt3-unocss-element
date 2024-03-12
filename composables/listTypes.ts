import { defineStore } from 'pinia'

export const useListTypesStore = defineStore('listTypes', () => {
  const allowedTypes = ref([])
  const menu = ref({})
  return { allowedTypes,menu }
})