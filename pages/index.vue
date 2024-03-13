<script setup lang="ts">
const pending = ref(true)
const archives = ref({})
const currentPage = ref(1)
const getPost = async() =>{
  try {
    await nextTick()
    const data = {
      model: -1,
      channel: -1,
      page:currentPage
    }
    const res:any = await getArchives(data)
    if (res.data.value.code === 1) {
      pending.value = res.pending.value
      archives.value = res.data.value.data.pageList.data
    } else {
      console.log(res.data.value.msg);
    }
  } catch (error) {
    console.error('请求错误：', error);
  }
}
const getPageList = async() => {
  try {
    const data = {}
    const res = await getPage(data)
    console.log(res);
    
  } catch (error) {
    console.error('请求错误：',error);
    
  }
}
const getBlockList = async() => {
  try {
    const data = {}
    const res = await getBlock(data)
    console.log(res);
    
  } catch (error) {
    console.error('请求错误：',error);
    
  }
}
onMounted(async()=>{
  await getPost()
  await getPageList()
  await getBlockList()
})
</script>

<template>
  <div flex="~ justify-between gap-6" mx-30 mt-6>
    <div class="bg-white dark:(bg-#181818)" basis="1.8/12" shadow rounded-1>leftsidebar</div>
    <div class="bg-white dark:(bg-#181818)" basis="7.7/12" shadow rounded-1>content</div>
    <div class="bg-white dark:(bg-#181818)" basis="2.5/12" shadow rounded-1>rightsidebar</div>
  </div>
</template>