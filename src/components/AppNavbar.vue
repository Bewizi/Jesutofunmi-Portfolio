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
        <ul class="font-switzer-md text-xl flex items-center space-x-20 mt-1">
          <li></li>
          <li>
            <Link class="inline-block relative group" to="/">
              <span
                class="group-hover:text-[#8631F4] transition-all duration-500 ease-in-out inline-block pb-1"
                >Home</span
              >
              <div
                class="w-20 h-[0.1rem] bg-[#8631F4] mt-5 absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              ></div>
            </Link>
          </li>
          <li>
            <Link class="inline-block relative group" to="#project">
              <span
                class="group-hover:text-[#8631F4] transition-all duration-500 ease-in-out inline-block pb-1"
              >
                Project
              </span>
              <div
                class="w-20 h-[0.1rem] bg-[#8631F4] mt-5 absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              ></div>
            </Link>
          </li>
          <li>
            <Link class="inline-block relative group" to="/about">
              <span
                class="group-hover:text-[#8631F4] transition-all duration-500 ease-in-out inline-block pb-1"
              >
                About
              </span>
              <div
                class="w-20 h-[0.1rem] bg-[#8631F4] mt-5 absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              ></div>
            </Link>
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
