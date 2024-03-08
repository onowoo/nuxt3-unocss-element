<template>
  <div class="group z-50" relative flex="col items-center" focus="outline-none">
    <div class="menu-item gap-1">
      <div
        v-if="!isUser"
        class="login-btn cursor-pointer"
        @click="$router.push('/user/login.html')"
      >
        登陆 | 注册
      </div>
      <div v-else>123</div>
    </div>
    <div
      v-if="!isUser"
      class="group-hover:visible"
      absolute
      top-0
      right-0
      mt-16
      rounded-8px
      hidden
      w-288px
      p-4
      bg-white
      shadow-md
      dark="bg-#282828"
    >
      <div flex="~ col gap-4 justify-between items-center">
        <div class="login-awards" w="100%">
          <div text-center>首次登录 / 注册免费领取</div>
          <div flex="~ justify-around" text-xs mt-6>
            <div flex="~ col justify-center items-center gap-1">
              <div i-carbon-flag-filled w-4 h-4 />
              <div>7天会员</div>
            </div>
            <div flex="~ col justify-center items-center gap-1">
              <div i-carbon-flag-filled w-4 h-4 />
              <div>7天会员</div>
            </div>
            <div flex="~ col justify-center items-center gap-1">
              <div i-carbon-flag-filled w-4 h-4 />
              <div>7天会员</div>
            </div>
          </div>
        </div>
        <div text="center xs">免费试学课程 · 收藏优质内容 · 提升成长等级</div>
        <div
          v-if="!isUser"
          class="login-btn text-center"
          @click="$router.push('/user/login.html')"
        >
          登陆 | 注册
        </div>
      </div>
    </div>
    <div
      v-else
      class="group-hover:visible"
      absolute
      top-0
      right-8
      mt-16
      rounded-8px
      hidden
      w-288px
      p="16px 16px 16px 20px"
      bg-white
      shadow-md
      dark="bg-#282828"
    >
      <div>
        <div>登陆后的</div>
      </div>
    </div>
  </div>
</template>
  <script setup>
const props = defineProps({
  isShow: {
    type: Object,
    default: {},
  },
});
const isUser = ref(false);
onMounted(() => {
  if (localStorage.getItem("token")) {
    isUser.value = true;
  }
});
</script>
<style scoped>
.login-btn {
  background: rgba(30, 128, 255, 0.05);
  border: 1px solid rgba(30, 128, 255, 0.3);
  border-radius: 4px;
  padding: 0.2rem 0.4rem;
  color: #007fff;
  line-height: 1.9rem;
  font-size: 12px;
  font-weight: 300;
  height: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;
}
.login-awards {
  border-radius: 6px;
  border: 1px solid rgba(41, 134, 255, 0.4);
  background: linear-gradient(
    180deg,
    rgba(30, 128, 255, 0.1),
    rgba(30, 128, 255, 0)
  );
  box-shadow: 0 2px 10px 0 rgba(30, 128, 255, 0.1);
  padding: 8px 12px;
}
</style>