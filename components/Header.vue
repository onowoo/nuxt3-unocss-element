<template>
  <div h-16 bg-white shadow dark="bg-#141414">
    <div flex="~ justify-between items-center" mx-auto container>
      <el-skeleton :rows="1" animated :loading="loading" variant="text" class="mt-1 scale-y-50">
        <template #default>
          <div flex="~ justify-between items-center gap-3">
            <header-logos />
            <header-menu />
          </div>
          <div flex="~ items-center gap-3">
            <header-Dark />
            <user-ucenter />      
          </div>
        </template>
      </el-skeleton>
    </div>
  </div>
</template>
<script setup>
const loading = ref(true)
onMounted(()=>{
  setTimeout(()=>{
    loading.value = false
  },300)
})
</script>