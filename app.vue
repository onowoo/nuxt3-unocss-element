<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0"/>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  background: #f2f3f5;
}
html.dark {
  background: #000;
  color: #d0d0d0;
}
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial !important;
}
</style>
