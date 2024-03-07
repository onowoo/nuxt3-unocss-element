<script setup>
const menu = ref([])
const getPageList = async() => {
    try {
        await nextTick()
        const res = await getChannel()
        console.log(res.data);
        menu.value = res.data.value.data.channel
    } catch (error) {
        console.log(error);
    }
}
onMounted(()=>[
  getPageList()
])
const channelMenu = computed(() => menu.value.filter(item => item.type === 'channel'))
const listMenu = computed(() => menu.value.filter(item => item.type === 'list'))
</script>

<template>
  <header-btn lg:hidden />
  <div hidden lg:flex>
    <div text="#b8b8b8 sm" w-full flex="~ items-center justify-center gap-6">
      <div v-for="(item,index) in channelMenu" :key="index">
        <div v-if="!item.haschild === 1" class="menu-item" >{{ item.name }}</div>
        <header-mega :menu="item" :mega="listMenu" v-else/>
      </div>
    </div>
  </div>
</template>

<style>
.group:hover .group-hover\:visible {
  display: block;
}
.menu-item {
  @apply h-16 flex items-center hover:(text-[#409EFF] border-b-3 border-[#409eff] font-bold) cursor-pointer tracking-widest;
}
</style>
