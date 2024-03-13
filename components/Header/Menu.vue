<script setup>
const listTypes = useListTypesStore()
const menu = listTypes.menu
const pending = ref(false)
const channelMenu = computed(() => menu.filter(item => item.type === 'channel'))
const listMenu = computed(() => menu.filter(item => item.type === 'list'))
</script>

<template>
  <header-btn lg:hidden />
  <div hidden lg:flex>
    <div text="#515767 sm" w-full flex="~ items-center justify-center gap-6" dark="text-#ffffffb3">
      <div v-for="(item,index) in channelMenu" :key="index">
          <div dark="bg-dark-300" bg-gray-200 rounded-lg w-20 h-5 text-white v-show="pending"></div>
          <div v-show="item.haschild === 0 && !pending" class="menu-item" >{{ item.name }}</div>
          <header-mega :menu="item" :mega="listMenu" v-show="item.haschild === 1 && !pending"/>
      </div>
    </div>
  </div>
</template>

<style>
.group:hover .group-hover\:visible {
  display: block;
}
.menu-item {
  @apply h-16 flex items-center hover:(text-[#409EFF] border-[#409eff]) cursor-pointer tracking-widest;
}
</style>