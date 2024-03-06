<template>
  <div class="w-120 bg-white shadow-md px-6 py-8 mx-auto rounded">
    <el-form ref="ruleFormRef" style="max-width: 600px" label-width="auto">
      <el-form-item label="用户名" prop="account">
        <el-input v-model="account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="password" />
      </el-form-item>

      <el-button @click="login">登陆</el-button>
    </el-form>
  </div>
</template>
<script setup>
import { ElMessage } from "element-plus";
const account = ref("");
const password = ref("");
const router = useRouter();
onMounted(() => {
  if (localStorage.getItem("token")) {
    router.push("/");
  }
});
const login = async () => {
  try {
    await nextTick();
    const data = {
      account: account.value,
      password: password.value,
    };
    const res = await goLogin(data);
    // console.log(res.data.value);
    if (res.data) {
      ElMessage({
        message: res.data.value.msg,
      });
      localStorage.setItem("token", res.data.value.data.token);
      localStorage.setItem("user", res.data.value.data.user_id);
      router.push("/");
    }
  } catch (error) {
    if (error) {
      ElMessage({
        message: error,
      });
    }
  }
};
definePageMeta({
  layout: "login",
});
</script>