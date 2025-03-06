<script lang="ts" setup>
import Link from '@/components/AppLink.vue'
import JesutofunmiPng from '@/assets/image/Jesutofunmi.jpg'
</script>
<template>
  <section class="container max-w-7xl mx-auto px-5 lg:px-2">
    <header class="flex items-center justify-between">
      <Link to="/">
        <div class="flex items-center gap-2">
          <figure>
            <img :src="JesutofunmiPng" alt="Jesutofumi" class="rounded-full w-12" />
          </figure>
          <h1 class="font-switzer-md text-xl">Jesutofunmi</h1>
        </div>
      </Link>
      <nav class="flex items-center gap-10">
        <ul class="font-switzer-md text-xl flex items-center space-x-20">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#project">Project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div>
          <button class="btn text-white rounded-full px-6 py-2 font-switzer-md text-xl">
            View Resume
          </button>
        </div>
      </nav>
    </header>
  </section>
</template>

<style scoped>
.btn {
  @apply bg-gradient-to-b from-[#D8C3F4] to-[#8631F4];
}
</style>
