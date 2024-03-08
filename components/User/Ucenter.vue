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
    <el-dialog v-model="loginVisible" width="500" :show-close="false" style="--el-dialog-margin-top:35vh">
      <el-form :model="form">
        <el-form-item label="Promotion name" label-width="400px">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones" label-width="400px">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="loginVisible = false">Cancel</el-button>
          <el-button type="primary" @click="loginVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
      <template #header="{ close, titleId }">
        <div class="my-header" flex="~ justify-between items-center" border-b pb-3 dark="border-dark-100">
        <div :id="titleId" class="font-300">登录畅享本站资源</div>
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
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
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