<script setup>
</script>

<template>
  <header-btn lg:hidden />
  <div hidden lg:flex>
    <ul  text="#b8b8b8 sm" w-full flex="~ items-center justify-center gap-6">
        <li class="menu-item">产品</li>
        <li class="menu-item">下载</li>
        <li
          class="group z-50"
          relative
          flex="col items-center"
          focus="outline-none"
        >
          <div class="menu-item gap-1">
            吃瓜 <span class="i-carbon-chevron-down" opacity-80 />
          </div>
          <div
            class="group-hover:visible"
            absolute
            top-0
            mt-14
            rounded
            hidden
            max-w-3xl
            w-screen
            bg-white
            shadow-lg
            dark="bg-#141414"
          >
            <div grid grid-cols-3 gap-10 p-8>
              <a v-for="i in 6" :key="i" flex>
                <span h-12 w-12 flex-shrink-0 bg-gray-300 />
                <div ml-4 flex="~ col">
                  <span text-left font-medium leading-none>二级菜单</span>
                  <span mt-1 text-left text-xs
                    >这是二级菜单的详细描述，使用户更确定自己的选择</span
                  >
                </div>
              </a>
            </div>
            <div
              col-span-2
              flex="~ items-center justify-between"
              border="t gray-300"
              px-8
              py-4
              dark="border-dark-100"
            >
              <div flex="~ col">
                <span text-left font-medium leading-none>畅想下载</span>
                <span mt-1 text-left text-xs
                  >阿苏丹发的啥饭大房东说放假啊可乐苏丹交罚款律师的卷发可乐酒店开房间啊老董开始姐夫</span
                >
              </div>
              <a href="#" class="btn">立即开通</a>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>

<style scoped>
.group:hover .group-hover\:visible {
  display: block;
}
.menu-item {
  @apply h-16 flex items-center hover:(text-[#409EFF] border-b-3 border-[#409eff] font-bold) cursor-pointer tracking-widest;
}
</style>
