<script setup>
const open = ref(false)
</script>

<template>
  <div>
    <button class="relative h-10 w-10 bg-transparent text-gray-500 focus:outline-none" @click="open = !open">
      <span class="sr-only">Open main menu</span>
      <div class="absolute left-1/2 top-1/2 block w-5 transform -translate-x-1/2 -translate-y-1/2">
        <span aria-hidden="true" class="icon" :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }" />
        <span aria-hidden="true" class="icon" :class="{ 'opacity-0': open } " />
        <span aria-hidden="true" class="icon" :class="{ '-rotate-45': open, ' translate-y-1.5': !open }" />
      </div>
    </button>
  </div>
</template>

<style scoped>
.menuBtn {
  @apply relative h-10 w-10 bg-white text-gray-500 focus:outline-none;
}
.icon {
  @apply absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out;
}
</style>
