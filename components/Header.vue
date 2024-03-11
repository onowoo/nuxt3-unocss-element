<template>
  <div h-16 bg-white shadow dark="bg-#141414">
    <div flex="~ justify-between items-center" mx-auto container>
      <el-skeleton :rows="1" animated :loading="pending">
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
const pending = ref(true)
const user = useUserStore()
onMounted(() => {
  setTimeout(()=>{
    pending.value = user.userPending
  },1200)
})
</script>