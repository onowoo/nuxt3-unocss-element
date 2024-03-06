<template>
  <div h-16 bg-white shadow dark="bg-#141414">
    <div flex="~ justify-between items-center" mx-auto container>
      <div flex="~ justify-between items-center gap-3">
        <header-logos />
        <header-menu />
      </div>
      <div flex="~ items-center gap-3">
        <header-Dark />
        <div v-if="isUser" class="login-btn" @click="$router.push('/user/login.html')">登陆 | 注册</div>
        <div v-else>123</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const isUser = ref(false)
onMounted(()=>{
if (localStorage.getItem('token')) {
  isUser.value = true
}
})
</script>
<style scoped>
.login-btn {
  background: rgba(30, 128, 255, 0.05);
  border: 1px solid rgba(30, 128, 255, 0.3);
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  color: #007fff;
  line-height: 1.9rem;
  font-size: 14px;
  font-weight: 300;
  margin-right: 2rem;
  height: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: background-color .3s, color .3s;
}
</style>
