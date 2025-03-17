<script lang="ts" setup>
import Link from '@/components/AppLink.vue'
import JesutofunmiPng from '@/assets/image/Jesutofunmi.jpg'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const visibility = ref<boolean>(false)
const toggleVisibility = () => (visibility.value = !visibility.value)
</script>
<template>
  <section class="container max-w-7xl mx-auto py-5 px-5 lg:px-8">
    <header class="flex items-center justify-between">
      <Link to="/">
        <div class="flex items-center gap-2">
          <figure>
            <img :src="JesutofunmiPng" alt="Jesutofumi" class="rounded-full w-12" />
          </figure>
          <h1 class="font-switzer-md text-xl">Jesutofunmi</h1>
        </div>
      </Link>
      <nav class="hidden lg:flex items-center gap-10">
        <ul class="font-switzer-md text-xl flex items-center space-x-20 mt-1">
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
            <a
              href="https://drive.google.com/file/d/1XA87USe3lxBhAE6Lu17rQHrZ3Lo-u5ZM/view?usp=drivesdk"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>
      </nav>

      <section class="flex items-center ml-10 gap-5 lg:hidden">
        <div class="lg:hidden">
          <button class="btn text-white rounded-full p-2 font-switzer-regular text-xs">
            <a
              href="https://drive.google.com/file/d/1XA87USe3lxBhAE6Lu17rQHrZ3Lo-u5ZM/view?usp=drivesdk"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>

        <div class="text-2xl lg:hidden cursor-pointer text-black" @click="toggleVisibility">
          <Icon v-if="!visibility" height="24" icon="prime:bars" width="24" />
          <Icon v-else height="24" icon="material-symbols:close-rounded" width="24" />
        </div>
      </section>
    </header>

    <transition name="slide-fade">
      <nav v-if="visibility" class="lg:hidden">
        <ul class="font-switzer-md text-xl flex flex-col items-center gap-5 mt-1">
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
      </nav>
    </transition>
  </section>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.btn {
  @apply bg-gradient-to-b from-[#D8C3F4] to-[#8631F4];
}
</style>
