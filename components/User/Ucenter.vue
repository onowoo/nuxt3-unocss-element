<template>
  <div class="group z-50" relative flex="col items-center" focus="outline-none">
    <div class="menu-item gap-1">
      <div
        v-if="!isUser"
        class="login-btn cursor-pointer"
        @click="loginVisible = !loginVisible"
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
          class="login-btn text-center cursor-pointer"
          @click="loginVisible = !loginVisible"
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
  <client-only>
    <el-dialog v-model="loginVisible" width="500" :show-close="false" style="--el-dialog-margin-top:35vh;--el-dialog-padding-primary:0">
      <div flex="~ flex">
        <div basis="2/3" border="r gray-300 dark:dark-50" pt-3>
          <el-form flex="~ col items-center justify-center">
            <el-form-item>
              <el-input v-model="form.name" style="width: 240px" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" style="width: 240px" placeholder="请输入密码">
                <template #append><div @click="console.log('forget')" cursor-pointer>忘记密码</div></template>
              </el-input>
            </el-form-item>
            <el-form-item flex="gap-4">
              <el-button type="primary" plain style="padding:8px 42px;">注册</el-button>
              <el-button type="primary" style="padding:8px 42px;">登录</el-button>
            </el-form-item>
            <el-form-item>
              
            </el-form-item>
          </el-form>
        </div>
        <div basis="1/3" py-3 px-8 flex="~ col justify-center items-center">
          <div>扫码登录</div>
          <div i-carbon-qr-code w-30 h-30></div>
        </div>
      </div>
      <template #footer>
        <div flex="~ justify-center items-center" p-3 text="xs">
          注册登录即表示同意 <span mx-1 text="#409EFF" cursor-pointer> 用户协议</span> 和 <span ml-1 text="#409EFF" cursor-pointer> 隐私政策</span>
        </div>
      </template>
      <template #header="{ close, titleId }">
        <div class="my-header" flex="~ justify-between items-center" border-b p-3 mb-6 dark="border-dark-100">
        <div :id="titleId" class="font-200">登录畅享本站资源</div>
        <div @click="close" class="cursor-pointer i-carbon-close"></div>
      </div>
      </template>
    </el-dialog>

    
  </client-only>
</template>
  <script setup>
const props = defineProps({
  isShow: {
    type: Object,
    default: {},
  },
});
const isUser = ref(false);
const loginVisible = ref(false);
const form = reactive({
  name: "",
  password: ""
});
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