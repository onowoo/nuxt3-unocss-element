<template>
  <div h-screen flex="~ col justify-between">
    <Header />
    <main class="text-center" flex-grow>
      <slot />
    </main>
    <Footer />
  </div>
</template>
