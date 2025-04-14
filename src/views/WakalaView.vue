<script lang="ts" setup>
import SectionCard from '@/components/SectionCard.vue'
import { type Ref, ref } from 'vue'
import type { KeyProps, MobileAppImageProps, MyWorkProps } from '@/types'
import { Icon } from '@iconify/vue'
import WakalaScreens from '@/components/wakala-screens/Wakala-Screens.vue'
import AppLink from '@/components/AppLink.vue'

const reviewImage: Ref<MobileAppImageProps[]> = ref([
  {
    id: 1,
    image: '/image/Wakala/Review-one.png',
    altText: '',
  },
  {
    id: 2,
    image: '/image/Wakala/Review-two.png',
    altText: '',
  },
  {
    id: 3,
    image: '/image/Wakala/Review-three.png',
    altText: '',
  },
  {
    id: 4,
    image: '/image/Wakala/Review-four.png',
    altText: '',
  },
])

const problemsList: Ref<KeyProps[]> = ref([
  {
    icon: 'ri:close-fill',
    text: 'High Gas Fees – Users struggle with high transaction costs, especially for small amounts.',
  },
  {
    icon: 'ri:close-fill',
    text: 'Complicated Wallet Process – Many platforms require holding funds in a specific wallet before transactions',
  },
  {
    icon: 'ri:close-fill',
    text: 'Slow Conversion Time – Delays in processing crypto-to-fiat transactions lead to frustration.',
  },
  {
    icon: 'ri:close-fill',
    text: 'Trust Issues – Users are skeptical about security and reliability.',
  },
])

const solutionsList: Ref<KeyProps[]> = ref([
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'Auto-Deduction of Gas Fees – Instead of requiring upfront gas fees, the app could deduct fees from the final transaction',
  },
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'Multiple Wallet Support – Users should be able to connect various wallets, reducing limitations',
  },
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'Instant Conversion Feature – Real-time crypto-to-Naira conversion with reduced processing delays.',
  },
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'Escrow System for Security – A secure transaction process to build trust',
  },
])

const myWorkImg: Ref<MyWorkProps[]> = ref([
  {
    image: '/image/Astradrop.png',
    title: 'Astradrop',
    mainHeader: 'Astradrop',
    subText:
      "Designing Seamless Logistics: Explore my work on Astradrop's website, web app, and mobile application, crafted to simplify delivery experiences",
    path: '/astradrop',
  },
  {
    image: '/image/Barca-Edtech.png',
    title: 'Barca-Edtech',
    mainHeader: 'Barca EdTech',
    subText:
      "Designing Seamless Logistics: Explore my work on Astradrop's website, web app, and mobile application, crafted to simplify delivery experiences",
    path: '/barca',
  },
  {
    image: '/image/Eco-Eat.png',
    title: 'Eco-Eat',
    mainHeader: 'EcoEat',
    subText:
      'Effortless Local Food Delivery. I crafted intuitive user flows and tailored design elements to deliver a seamless food ordering experience.',
    path: '/ecoEat',
  },
])
</script>

<template>
  <!--  hero section-->
  <section class="wakala-hero-img bg-cover h-screen"></section>
  <section class="max-w-7xl mx-auto px-5 lg:px-8 mt-10 flex flex-wrap items-center gap-20">
    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-xl mb-3">Role</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-2xl">Ui/Ux Designer</p>
    </div>

    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-xl mb-3">Tools</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-2xl">Figma</p>
    </div>

    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-xl mb-3">TimeFrame</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-2xl">4weeks</p>
    </div>
  </section>
  <!--  hero section-->

  <!--  Research & Competitive Analysis-->
  <section class="research-competitive-analysis bg-cover h-screen mt-3"></section>

  <sectionCard class="mt-32">
    <h1 class="font-switzer-sm-bold text-2xl lg:text-4xl text-[#0C0C0C]">
      Research & Competitive Analysis
    </h1>
    <p class="font-switzer-regular text-[#484848] mt-5 leading-normal lg:leading-normal lg:text-lg">
      Before designing WakalaPay, I conducted in-depth research and competitive analysis to <br />
      understand the challenges users face with crypto-to-fiat conversions. The goal was to create
      <br />
      a seamless experience that simplifies transactions while maintaining trust and security
    </p>

    <!--    image-->
    <section class="bg-[#F6F6F6] mt-10 p-5">
      <section class="flex flex-col lg:flex-row justify-between gap-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <figure v-for="items in reviewImage" :key="items.id">
            <img :src="items.image" alt="" />
          </figure>
        </div>

        <figure>
          <img alt="" src="/image/Wakala/Review-five.png" />
        </figure>
      </section>
    </section>
    <!--    image-->

    <p
      class="mt-10 text-[#484848] font-switzer-regular leading-normal lg:leading-normal lg:text-lg"
    >
      Some insights i got from playstore while doing competitive <br />
      analysis and also questions i asked some other cryoto enthusiast
    </p>
  </sectionCard>
  <!--  Research & Competitive Analysis-->

  <!--  Defining the problem statement-->
  <SectionCard class="mt-32">
    <section class="mb-10">
      <div class="mb-8">
        <h4 class="underline font-switzer-md text-2xl lg:text-3xl mb-5">
          Defining the Problem Statement
        </h4>
        <p class="text-[#484848] leading-normal lg:leading-normal lg:text-xl">
          From the research, some key issues users face <br />
          when converting crypto to Naira include:
        </p>
      </div>

      <ul v-for="(items, index) in problemsList" :key="index" class="mb-2 lg:mb-1">
        <li
          class="flex items-center gap-2 text-[#484848] font-switzer-regular text-xs lg:text-base"
        >
          <Icon :icon="items.icon" class="w-[24px] h-[24px] lg:h-[32px] lg:w-[32px] text-red-500" />
          {{ items.text }}
        </li>
      </ul>
    </section>

    <!--  Defining the problem statement-->

    <!--  BrainStorming Solutions-->
    <section>
      <div class="mb-8">
        <h4 class="underline font-switzer-md text-2xl lg:text-3xl mb-5">Brainstorming Solutions</h4>
        <p class="text-[#484848] leading-normal lg:leading-normal lg:text-xl">
          To address these pain points, here are some initial ideas i <br />
          came up with:
        </p>
      </div>

      <ul v-for="(items, index) in solutionsList" :key="index" class="mb-2 lg:mb-1">
        <li
          class="flex items-center gap-2 text-[#484848] font-switzer-regular text-xs lg:text-base"
        >
          <Icon :icon="items.icon" class="w-[24px] h-[24px] lg:h-[32px] lg:w-[32px]" />
          {{ items.text }}
        </li>
      </ul>
    </section>
  </SectionCard>

  <!--  BrainStorming Solutions-->

  <!-- wakala screens -->
  <WakalaScreens />
  <!-- wakala screens -->

  <!--  descrption-->
  <SectionCard>
    <h4 class="font-switzer-md text-2xl lg:text-4xl text-[#0C0C0C]">WakalaPay</h4>
    <p class="font-switzer-regular text-[#484848] mt-5 leading-normal lg:leading-normal lg:text-lg">
      WakalaPay is a product of strategic research and design thinking, aimed at making crypto
      transactions seamless. Every interaction is optimized to <br />
      enhance usability, ensuring users can convert and transact effortlessly.
    </p>
  </SectionCard>
  <!--  descrption-->

  <!--  see also-->
  <SectionCard class="mt-32">
    <h4 class="font-switzer-md text-2xl lg:text-4xl mb-8">See also</h4>

    <!--      images-->
    <section class="grid grid-col-1 lg:grid-cols-2 gap-8 mt-5">
      <figure v-for="(mywork, index) in myWorkImg" :key="index" class="group relative">
        <img
          ref="imagevw"
          :alt="mywork.title"
          :src="mywork.image"
          class="group-hover:blur-[4px] group-hover:brightness-75 transition-all duration-500 ease-in-out"
        />
        <AppLink
          :to="mywork.path"
          class="absolute top-8 lg:inset-0 lg:top-20 px-12 text-start flex flex-col flex-wrap items-start justify-start opacity-0 invisible group-hover:visible group-hover:text-white group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-9999"
        >
          <h1 class="font-switzer-sm-bold text-2xl lg:text-4xl mb-5 lg:mb-8">
            {{ mywork.mainHeader }}
          </h1>
          <p class="font-switzer-md lg:text-2xl leading-normal">{{ mywork.subText }}</p>
        </AppLink>
      </figure>
    </section>
    <!--      images-->
  </SectionCard>
  <!-- see also -->
</template>

<style scoped>
.wakala-hero-img {
  background-image: url('/image/Wakala/Wakala-hero-image.png');
}

.research-competitive-analysis {
  background-image: url('/image/Wakala/Research-competitive-analysis.png');
}
</style>
