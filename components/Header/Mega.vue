<template>
  <div class="group z-50" relative flex="col items-center" focus="outline-none">
    <div class="menu-item gap-1" font-300>
      <NuxtLink :to="menu.diyname + '.html'">
      {{ menu.name }} <span class="i-carbon-chevron-down" opacity-80 />
      </NuxtLink>
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
      <div grid gap-10 p-8 :class="currentMega.length % 2 === 0 ? 'grid-cols-2':'grid-cols-3'">
        <a v-for="(item,index) in currentMega" :key="index" flex="~ justify-center items-center">
            <img :src="baseUrl + item.image" alt="" w-18 h-12 rounded-md>
            <div ml-4 flex="~ col justify-between items-start gap-3" class="basis-3/4" h-12>
              <NuxtLink :to="`${item.diyname}.html`">
                <header-flag :name="item.name.replace(/[^\u4e00-\u9fa5|,]+/, '')" :flag="item.flag"/>
              </NuxtLink>
              <div class="text-xs text-ellipsis overflow-hidden cursor-pointer">
                  <el-tooltip
                  class="box-item"
                  effect="dark"
                  :content="item.description"
                  placement="top-start"
                  >{{ item.description }} ...
                  </el-tooltip>
              </div>
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
        <div flex="~ col gap-2">
          <span text-left font-medium leading-none>开通Vip,尊享全站免费下载服务</span>
          <span mt-1 text-left text-xs
            >阿苏丹发的啥饭大房东说放假啊可乐苏丹交罚款律师的卷发可乐酒店开房间啊老董开始姐夫</span
          >
        </div>
        <a href="/" class="btn">立即开通</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { baseUrl } from '~/constants/index';
const props = defineProps({
    menu: {
        type: Object,
        default: {}
    },
    mega: {
        type: Object,
        default: {}
    }
})
const currentMega = computed(()=> props.mega.filter(item => item.parent_id === props.menu.id))
</script>