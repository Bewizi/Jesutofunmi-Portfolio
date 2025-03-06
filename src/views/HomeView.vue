<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import AppLink from '@/components/AppLink.vue'
import { ref, type Ref } from 'vue'
import MyWork from '@/components/my-work/MyWork.vue'
import CreativeShots from '@/components/creative-shots/CreativeShots.vue'

const socailIcon: Ref<Array<string>> = ref([
  'uil:behance',
  'pajamas:twitter',
  'uil:dribbble',
  'uil:instagram',
])
</script>

<template>
  <main class="mt-20">
    <!--    Hero section-->
    <section class="container max-w-7xl mx-auto px-5 lg:px-2">
      <section class="grid place-items-center text-center">
        <!--        social icons-->
        <div class="flex items-center justify-center gap-4">
          <template v-for="(icon, index) in socailIcon" :key="index">
            <Icon
              :icon="icon"
              class="bg-[#F2F2F2] p-2 rounded-full"
              color="#191919"
              height="40"
              width="40"
            />
          </template>
        </div>
        <!--        social icons-->
        <h2 class="font-switzer-sm-bold text-6xl leading-normal">
          Welcome to my <br />
          <strong class="text-[#8631F4]"> Design Universe 🎨 </strong>
        </h2>
        <p class="leading-normal text-[#484848] mt-3 text-xl">
          Hi 🙂, I’m Jesutofunmi,. I am an Empathetic Product Designer & UI <br />
          Expert leveraging data-driven insights to craft seamless, user- <br />centered solutions
          that bring your vision to life
        </p>

        <!--      buttons-->
        <div class="flex items-center gap-4 mt-8">
          <div>
            <button
              class="btn text-white rounded-full px-6 py-4 font-switzer-regular text-lg flex items-center gap-2"
            >
              Hire me
              <Icon
                color="white"
                height="24"
                icon="qlementine-icons:arrow-up-right-24"
                width="24"
              />
            </button>
          </div>
          <div>
            <button
              class="border border-[#EDEDED] rounded-full px-6 py-4 font-switzer-regular text-lg"
            >
              <AppLink class="text-[#090909]/50" to=""> About me </AppLink>
            </button>
          </div>
        </div>
        <!--      buttons-->
      </section>
    </section>
    <!--    Hero section-->

    <!--    My Quote-->
    <section class="bg-[#F9F9F9] p-5 mt-40 h-screen">
      <section class="container max-w-7xl mx-auto px-5 lg:px-2 mt-20">
        <Icon color="#CACACA" height="100" icon="hugeicons:quote-up" width="100" />

        <section class="grid place-items-center text-start">
          <p class="leading-normal text-[#484848] mt-3 text-4xl font-switzer-md">
            I believe a seamless
            <strong class="text-[#8631F4] underline"> user experience </strong> <br />
            turns visitors into
            <strong class="text-[#EABD09] underline"> Users </strong>
            and users <br />
            into <strong class="text-[#3A86FF] underline"> Loyal Customers </strong>
          </p>
        </section>

        <Icon
          class="float-end"
          color="#CACACA"
          height="100"
          icon="hugeicons:quote-down"
          width="100"
        />
      </section>
    </section>
    <!--    My Quote-->

    <!--    my work-->
    <MyWork />
    <!--    my work-->

    <!--    creativeshots-->
    <CreativeShots />
    <!--    creativeshots-->
  </main>
</template>

<style scoped>
.btn {
  @apply bg-gradient-to-b from-[#D8C3F4] to-[#8631F4];
}
</style>
