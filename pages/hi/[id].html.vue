<script setup lang="ts">
const user = useUserStore()
</script>

<template>
  <div>
    <div i-twemoji:waving-hand inline-block animate-shake-x animate-duration-5000 text-4xl />
    <h3 text-2xl font-500>
      Hi,
    </h3>
    <div text-xl>
      {{ 111 }}!
    </div>

    <template v-if="user.otherNames.length">
      <p my-4 text-sm>
        <span op-50>Also as known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <Counter />

    <div>
      <NuxtLink
        class="m-3 text-sm btn"
        to="/"
      >
        Back
      </NuxtLink>
    </div>
  </div>
</template>
