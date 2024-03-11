<template>
  <div class="group z-50" relative flex="col items-center" focus="outline-none">
    <client-only>
    <div class="menu-item gap-1">
      <div
        v-if="!user.isLogin"
        class="login-btn cursor-pointer"
        @click="loginVisible = !loginVisible"
      >
        登陆 | 注册
      </div>
      <div v-else>
        <img :src="user.userInfo.avatar" class="rounded-full w-8 h-8" alt="">
      </div>
    </div>
    <div
      v-if="!user.isLogin"
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
      right-0
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
        <div>{{ user.userInfo.username }}</div>
        <div>{{ user.userInfo.level }}</div>
      </div>
    </div>
    </client-only>
  </div>
  <client-only>
    <el-dialog
      v-model="loginVisible"
      width="500"
      :show-close="false"
      style="
        --el-dialog-margin-top: 35vh;
        --el-dialog-padding-primary: 0;
        --el-dialog-border-radius: 8px;
      "
    >
      <div flex="~ flex">
        <div basis="2/3" border="r gray-300 dark:dark-50" pt-3>
          <el-form
            :model="form"
            flex="~ col items-center justify-center"
            :rules="rules"
            status-icon
          >
            <el-form-item v-if="state !== 'forget'" prop="name">
              <el-input
                v-model="form.name"
                style="width: 240px"
                placeholder="请输入用户名"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="form.password"
                style="width: 240px"
                placeholder="请输入密码"
                show-password
              >
              </el-input>
            </el-form-item>
            <el-form-item v-if="state !== 'login'" prop="rePassword">
              <el-input
                v-model="form.rePassword"
                style="width: 240px"
                placeholder="确认输入的密码"
                show-password
              >
              </el-input>
            </el-form-item>
            <el-form-item v-if="state !== 'login'" prop="email">
              <el-input
                v-model="form.email"
                style="width: 240px"
                placeholder="请输入邮箱"
              >
              </el-input>
            </el-form-item>
            <el-form-item v-if="state !== 'login'" prop="code">
              <el-input
                v-model="form.code"
                style="width: 240px"
                placeholder="请输入验证码"
              >
                <template #append
                  ><el-button
                    :loading="checkCodeBtn.loading"
                    :disabled="checkCodeBtn.disabled"
                    @click="getCode"
                    link
                    size="small"
                    style="width: 80px"
                    ><span text="xs #409EFF" font-300>{{
                      checkCodeBtn.text
                    }}</span>
                  </el-button>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <div flex="~ col justify-center items-center gap-4">
                <el-button
                  type="primary"
                  plain
                  style="width: 240px"
                  @click="submit"
                  >{{ btnText[state][0] }}</el-button
                >
                <div style="width: 240px" flex="~ justify-between">
                  <div
                    text="xs hover:#409eff"
                    cursor-pointer
                    @click="
                      state = btnText[state][1].includes('登录')
                        ? 'login'
                        : 'sign'
                    "
                  >
                    {{ btnText[state][1] }}
                  </div>
                  <div
                    text="xs hover:#409eff"
                    cursor-pointer
                    @click="
                      state = btnText[state][2].includes('注册')
                        ? 'sign'
                        : 'forget'
                    "
                  >
                    {{ btnText[state][2] }}
                  </div>
                </div>
              </div>
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
          注册登录即表示同意
          <span mx-1 text="#409EFF" cursor-pointer> 用户协议</span> 和
          <span ml-1 text="#409EFF" cursor-pointer> 隐私政策</span>
        </div>
      </template>
      <template #header="{ close, titleId }">
        <div
          class="my-header"
          flex="~ justify-between items-center"
          border-b
          p-3
          mb-3
          dark="border-dark-100"
        >
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
const user = useUserStore()
watchEffect(()=>{
  console.log(user.userInfo);
})
const router = useRouter()
//状态
const isUser = ref(false);
const loginVisible = ref(false);
const state = ref("login"); // 初始状态为 login
const checkCodeBtn = reactive({
  text: "获取验证码",
  loading: false,
  disabled: false,
  duration: 60,
  timer: null,
});
const btnText = {
  login: ["立即登录", "立即注册", "忘记密码"],
  sign: ["立即注册", "立即登录", "忘记密码"],
  forget: ["立即重制", "立即登录", "立即注册"],
};
//登陆、注册、重制密码的表单数据和验证规则
const form = reactive({
  name: "",
  password: "",
  rePassword: "",
  email: "",
  code: "",
});
const rules = reactive({
  name: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    {
      pattern: /^[a-zA-Z][a-zA-Z0-9]{4,14}$/,
      message: "5-15个字符,英文开头,英文和数字",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 8, message: "密码至少需要8个字符", trigger: "blur" },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
      message: "大小写字母和数字",
      trigger: "blur",
    },
  ],
  rePassword: [
    { required: true, message: "请再次输入密码", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value !== form.password) {
          callback(new Error("两次输入的密码不一致"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" },
    { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" },
  ],
  code: [
    { required: true, message: "请输入验证码", trigger: "change" },
  ],
});
//登陆、注册、重置密码api请求
const submit = async () => {
  try {
    await nextTick();
    if (state.value === "login") {
      const data = {
        account: form.name,
        password: form.password,
      };
      const res = await goLogin(data);
      if (res.data.value.code === 1) {
        isUser.value = true
        localStorage.setItem('token',res.data.value.data.token)
        localStorage.setItem('user',res.data.value.data.user_id)
        loginVisible.value = false
        ElMessage({
          message: res.data.value.msg,
          type: 'success',
        })
        } else {
          ElMessage({
          message: res.data.value.msg,
          type: 'error',
        })
        }
    } else if (state.value === "sign") {
      const data = {
        username: form.name,
        password: form.password,
        email: form.email,
        captcha: form.code,
      };
      const res = await goRegister(data);
      if (res.data.value.code === 1) {
        isUser.value = true
        localStorage.setItem('token',res.data.value.data.token)
        localStorage.setItem('user',res.data.value.data.user_id)
        loginVisible.value = false
        ElMessage({
          message: res.data.value.msg,
          type: 'success',
        })
        } else {
          ElMessage({
          message: res.data.value.msg,
          type: 'error',
        })
      }
    } else {
      const data = {
        email: form.email,
        newpassword: form.password,
        captcha: form.code,
      };
      const res = await goResetpwd(data);
      if (res.data.value.code === 1) {
        loginVisible.value = false
        ElMessage({
          message: res.data.value.msg,
          type: 'success',
        })
        } else {
          ElMessage({
          message: res.data.value.msg,
          type: 'error',
        })
      }
    }
  } catch (error) {
    console.log(error);
  }
};
//获取验证码api请求
const getCode = async () => {
  try {
    await nextTick()
    //倒计时期间按钮不能单击
    checkCodeBtn.disabled = true;
    //清除定时器
    checkCodeBtn.timer && clearInterval(checkCodeBtn.timer);
    //开启定时器
    checkCodeBtn.timer = setInterval(() => {
      const tmp = checkCodeBtn.duration--;
      checkCodeBtn.text = `${tmp}秒`;
      if (tmp <= 0) {
        // 清除定时器
        clearInterval(checkCodeBtn.timer);
        checkCodeBtn.duration = 60;
        checkCodeBtn.text = "重新获取";
        //按钮状态改变
        checkCodeBtn.disabled = false;
      }
    }, 1000);
    if (form.email !== "") {
      const data = {
        email: form.email,
        event: state.value === "sign" ? "register" : "resetpwd",
      };
      const res = await getEmsSend(data);
      console.log(res.data.value);
      const type = res.data.value.code === 0 ? 'error' : 'success'
      ElMessage({
        message: res.data.value.msg,
        type: type,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(()=>{
  if (localStorage.getItem("token")) {
    isUser.value = true;
  }
})
onBeforeMount(async()=>{
  if (localStorage.getItem("token")) {
    user.isLogin = true;
    await user.getUser()
  }
})
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