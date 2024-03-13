<template>
  <div h-screen flex="~ col justify-between">
    <Header />
    <main class="text-center" flex-grow  mx-auto container>
      <slot />
    </main>
    <Footer />
  </div>
</template>
