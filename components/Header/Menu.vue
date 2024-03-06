<script setup>
</script>

<template>
  <header-btn lg:hidden />
  <div hidden lg:flex>
    <ul>
      <li>
        <div class="text-sm">
          <div
            class="w-full flex items-center justify-center text-#b8b8b8"
          >
            <a class="mr-8 h-16 flex items-center" href="#">产品</a>
            <a class="mr-8 h-16 flex items-center" href="#">下载</a>

            <!-- Component Start -->
            <div
              class="group relative flex flex-col items-center focus:outline-none"
            >
              <div class="h-16 flex items-center gap-1">
                吃瓜 <span class="i-carbon-chevron-down" opacity-80 />
              </div>
              <div
                class="absolute top-0 mt-16 hidden max-w-3xl w-screen bg-white shadow-lg group-hover:visible"
                dark="bg-#141414"
              >
                <div class="grid grid-cols-3 gap-10 p-8">
                  <a v-for="i in 6" :key="i" class="flex" href="#">
                    <span class="h-12 w-12 flex-shrink-0 bg-gray-300" />
                    <div class="ml-4 flex flex-col">
                      <span class="text-left font-medium leading-none">二级菜单</span>
                      <span class="mt-1 text-left text-xs">这是二级菜单的详细描述，使用户更确定自己的选择</span>
                    </div>
                  </a>
                </div>
                <div
                  class="col-span-2 flex items-center justify-between border-t border-gray-300 px-8 py-4"
                  href="#"
                >
                  <div class="flex flex-col">
                    <span class="text-left font-medium leading-none">Heading</span>
                    <span class="mt-1 text-left text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</span>
                  </div>
                  <a href="#" class="btn">Button</a>
                </div>
              </div>
            </div>
            <!-- Component End -->
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
</style>
