<script lang="ts" setup>
import { ref, type Ref } from 'vue'

interface Props {
  image: string
  mainHeader: string
  subHeader: string
}

const myWorkImg: Ref<Array<Props>> = ref([
  {
    image: '/image/NGO.png',
    mainHeader: 'NGO Design',
    subHeader: 'UI Design for NGO',
  },
  {
    image: '/image/Fintech-Dashboard.png',
    mainHeader: 'Fintech Dashboard',
    subHeader: 'Bank Dashboard',
  },
])
</script>

<template>
  <section class="container max-w-7xl mx-auto px-5 lg:px-2 mt-40">
    <section class="text-start">
      <!--      main header-->
      <section class="mb-14 flex items-center justify-between">
        <div>
          <h1 class="font-switzer-md text-4xl text-[#0C0C0C] mb-5">Creative Shots</h1>
          <p class="text-[#484848] font-switzer-regular text-xl leading-normal">
            Not every design needs a deep case study. Sometimes, I explore <br />
            ideas, experiment with layouts, or create quick UI concepts just for <br />
            fun. Here are some of my favorite design snapshots.
          </p>
        </div>

        <!--        button-->
        <div>
          <button
            class="text-[#090909]/50 border border-[#EDEDED] hover:bg-[#F2F2F2] transition-all duration-500 rounded-full px-6 py-4 font-switzer-regular text-lg"
          >
            <a href="https://www.instagram.com/benditodsg/" target="_blank"> Show more </a>
          </button>
        </div>
        <!--        button-->
      </section>
      <!--      main header-->

      <!--      images-->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <figure v-for="(mywork, index) in myWorkImg" :key="index">
          <img :alt="mywork.mainHeader" :src="mywork.image" />
          <figcaption class="mt-5">
            <p class="text-[#484848] font-switzer-regular text-lg mb-2.5">
              {{ mywork.mainHeader }}
            </p>
            <h2 class="font-switzer-md text-2xl text-[#0C0C0C]">{{ mywork.subHeader }}</h2>
          </figcaption>
        </figure>
      </section>
      <!--      images-->
    </section>
  </section>
</template>

<style scoped></style>
