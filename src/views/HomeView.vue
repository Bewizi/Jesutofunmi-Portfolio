<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import AppLink from '@/components/AppLink.vue'
import { ref, type Ref } from 'vue'
import MyWork from '@/components/my-work/MyWork.vue'
import CreativeShots from '@/components/creative-shots/CreativeShots.vue'

interface IconProps {
  icon: string
  link?: string
}

const socailIcon: Ref<Array<IconProps>> = ref([
  {
    icon: 'uil:behance',
    link: 'https://www.behance.net/oluwalajesutof',
  },
  {
    icon: 'pajamas:twitter',
    link: 'https://x.com/OluwaladeJesut1?t=a2IkmNn7P9iD59nbOhTs0g&s=09',
  },
  {
    icon: 'uil:dribbble',
    link: 'https://dribbble.com/Bendito',
  },
  {
    icon: 'uil:instagram',
    link: 'https://www.instagram.com/benditodsg/',
  },
])
</script>

<template>
  <main class="mt-20">
    <!--    Hero section-->
    <section class="container max-w-7xl mx-auto px-5 lg:px-2">
      <section class="grid place-items-center text-center">
        <!--        social icons-->
        <div class="flex items-center justify-center gap-4">
          <section v-for="(icons, index) in socailIcon" :key="index">
            <a :href="icons.link" target="_blank">
              <Icon
                :icon="icons.icon"
                class="bg-[#F2F2F2] p-2 rounded-full"
                color="#191919"
                height="40"
                width="40"
              />
            </a>
          </section>
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
              <a
                class="flex items-center gap-2"
                href="https://mail.google.com/mail/u/1/#inbox?compose=new"
                target="_blank"
              >
                Hire me
                <Icon
                  color="white"
                  height="24"
                  icon="qlementine-icons:arrow-up-right-24"
                  width="24"
                />
              </a>
            </button>
          </div>
          <div>
            <AppLink
              class="text-[#090909]/50 border border-[#EDEDED] hover:bg-[#F2F2F2] transition-all duration-500 rounded-full px-6 py-4 font-switzer-regular text-lg"
              to="/about"
            >
              About me
            </AppLink>
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
