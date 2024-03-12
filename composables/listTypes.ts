import { defineStore } from 'pinia'

export const useListTypesStore = defineStore('listTypes', () => {
  const allowedTypes = ref([])
  return { allowedTypes }
})