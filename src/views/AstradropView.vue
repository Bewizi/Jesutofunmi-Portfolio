<script lang="ts" setup>
import SectionCard from '@/components/SectionCard.vue'
import { Icon } from '@iconify/vue'
import { ref, type Ref } from 'vue'
import type { KeyProps, MobileAppImageProps, MyWorkProps } from '@/types'
import AppLink from '@/components/AppLink.vue'

const keyHighlights: Ref<KeyProps[]> = ref([
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'User-Friendly Interface – A clean, intuitive layout for easy navigation.',
  },
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'Seamless Order Management – Businesses can quickly request pickups, track deliveries, and manage transactions',
  },
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'Responsive Design – Optimized for desktop and tablet users.',
  },
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'Real-Time Updates – Live tracking and status updates for ongoing deliveries.',
  },
])

const mobileAppImages: Ref<MobileAppImageProps[]> = ref([
  {
    image: '/image/Astradrop/mobile-app-one.png',
    altText: 'mobile app one',
  },
  {
    image: '/image/Astradrop/mobile-app-two.png',
    altText: 'mobile app two',
  },
  {
    image: '/image/Astradrop/mobile-app-three.png',
    altText: 'mobile app three',
  },
  {
    image: '/image/Astradrop/mobile-app-four.png',
    altText: 'mobile app four',
  },
])

const busniessApp: Ref<KeyProps[]> = ref([
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: ' Create and manage delivery requests effortlessly.',
  },
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'Track deliveries in real time with live updates.',
  },
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'View order history and manage transactions.',
  },
])

const ridersApp: Ref<KeyProps[]> = ref([
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: ' Accept and fulfill delivery requests with ease.',
  },
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: 'Get optimized navigation and route suggestions.',
  },
  {
    icon: 'fluent-emoji-flat:check-mark-button',
    text: ' Update order status and track earnings in one place',
  },
])

const myWorkImg: Ref<MyWorkProps[]> = ref([
  {
    image: '/image/Wakala.png',
    title: 'Wakala',
    mainHeader: 'WakalaPay',
    subText:
      'WakalaPay: Bridging the Crypto Gap. Explore how I designed a seamless crypto conversion app, solving real-world problems in the Web3 space',
    path: '/wakala',
  },
  {
    image: '/image/Barca-Edtech.png',
    title: 'Barca-Edtech',
    mainHeader: 'Barca EdTech',
    subText:
      "Designing Seamless Logistics: Explore my work on Astradrop's website, web app, and mobile application, crafted to simplify delivery experiences",
    path: '',
  },
  {
    image: '/image/Eco-Eat.png',
    title: 'Eco-Eat',
    mainHeader: 'EcoEat',
    subText:
      'Effortless Local Food Delivery. I crafted intuitive user flows and tailored design elements to deliver a seamless food ordering experience.',
    path: '',
  },
])
</script>

<template>
  <!--  hero section-->
  <section class="astradrop-hero-img bg-cover h-screen"></section>
  <section class="max-w-7xl mx-auto px-5 lg:px-8 mt-10 flex flex-wrap items-center gap-20">
    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-xl mb-3">Role</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-2xl">Ui/Ux Designer</p>
    </div>

    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-xl mb-3">Tools</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-2xl">Figma</p>
    </div>
  </section>
  <!--  hero section-->

  <!--  description about astradrop-->
  <SectionCard class="mt-32">
    <h1 class="text-[#0C0C0C] font-switzer-sm-bold text-4xl mb-4">
      Astradrop – A Seamless Logistics Experience
    </h1>
    <p class="text-[#484848] font-switzer-regular text-lg">
      Astradrop is a logistics platform designed to simplify deliveries for businesses and
      customers. The platform connects users with riders, ensuring a fast, reliable, and seamless
      delivery experience. As the UI/UX Designer, I was responsible for designing the end-to-end
      experience across multiple touchpoints—including the landing page, business and rider apps,
      web app, and admin dashboard.
    </p>

    <!--    buttons-->
    <section class="mt-5 flex items-center gap-5">
      <button
        class="bg-gradient-to-b from-[#D8C3F4] to-[#8631F4] text-white rounded-full px-6 py-2 font-switzer-regular lg:text-xl"
      >
        <a class="flex items-center gap-2" href="https://astradrop.com/" target="_blank">
          <span>
            <Icon height="16" icon="codicon:link" width="16" />
          </span>
          See Live Website
        </a>
      </button>

      <button
        class="text-[#090909]/50 border border-[#EDEDED] hover:bg-[#F2F2F2] transition-all duration-500 rounded-full px-6 py-4 font-switzer-regular lg:text-lg"
      >
        <a
          class="flex items-center gap-2"
          href="https://mail.google.com/mail/u/1/#inbox?compose=new"
          target="_blank"
        >
          Hire me
        </a>
      </button>
    </section>
    <!--    buttons-->
  </SectionCard>
  <!--  description about astradrop-->

  <!--  challange section-->
  <SectionCard class="mt-32">
    <section class="flex flex-wrap gap-5 lg:gap-0 lg:justify-between mb-20">
      <!--  challenge-->
      <section>
        <h3 class="text-[#0C0C0C] font-switzer-sm-bold text-4xl mb-5">The Challenge⚡</h3>
        <p class="text-[#484848] text-lg font-switzer-regular">
          Creating a user-friendly and intuitive platform that caters to <br />
          multiple users (businesses, customers, and riders) while <br />
          maintaining simplicity, efficiency, and accessibility.
        </p>
      </section>
      <!--  challenge-->

      <!--  approach-->
      <section>
        <h3 class="text-[#0C0C0C] font-switzer-sm-bold text-4xl mb-5">My Approach</h3>
        <ul class="list-disc font-switzer-regular text-[#484848] text-lg px-5 lg:px-0">
          <li>Designed a clean, easy-to-navigate interface to enhance user experience.</li>
          <li>Focused on seamless interactions across web and mobile platforms.</li>
          <li>Ensured consistency across all touchpoints to strengthen brand identity.</li>
        </ul>
      </section>
      <!--  approach-->
    </section>

    <!--    image-->
    <figure>
      <img alt="Astradrop Dashboard" src="/image/Astradrop/astradrop-dashboard.png" />
    </figure>
    <!--    image-->
  </SectionCard>
  <!--  challange section-->

  <!--  landing page-->
  <SectionCard>
    <h3 class="text-[#000] text-4xl font-switzer-md mb-10">Landing Page</h3>

    <!--    image-->
    <figure>
      <img alt="Astradrop Landing Page" src="/image/Astradrop/Astradro-Landing-Page.png" />
      <figcaption class="mt-5">
        <p class="text-[#484848] font-switzer-regular text-lg">
          The Astradrop landing page serves as the first touchpoint for businesses and riders
          looking for a seamless <br />
          delivery solution. It was designed to be responsive, intuitive, and conversion-focused,
          ensuring that users <br />
          can easily understand the platform’s value and take action—whether on desktop or mobile.
        </p>
      </figcaption>
    </figure>
    <!--    image-->
  </SectionCard>
  <!--  landing page-->

  <!--  web app-->
  <sectionCard class="mt-32">
    <h3 class="text-[#000] text-4xl font-switzer-md mb-10">Webapp</h3>
    <!--    image-->
    <figure>
      <img alt="Astradrop Landing Page" src="/image/Astradrop/Astradrop-webapp.png" />
      <figcaption class="mt-5">
        <p class="text-[#484848] font-switzer-regular text-lg">
          The Astradrop Web App was designed to provide businesses with a seamless way to create,
          manage, and <br />
          track deliveries in real time. My focus was on usability, efficiency, and responsiveness,
          ensuring a smooth <br />
          experience across desktop and tablet devices.
        </p>
      </figcaption>
      <!--      highlights-->
      <h3 class="text-[#000] text-4xl font-switzer-md mb-5 mt-10">Key Highlights</h3>
      <!--      highlights-->
      <ul v-for="(items, index) in keyHighlights" :key="index" class="leading-normal mb-2">
        <li class="flex items-center gap-2 text-[#484848] font-switzer-regular">
          <Icon :icon="items.icon" height="32" width="32" />
          {{ items.text }}
        </li>
      </ul>
    </figure>
    <!--    image-->
  </sectionCard>
  <!--  web app-->

  <!--  Admin Dashboard-->
  <sectionCard class="mt-32">
    <h3 class="text-[#000] text-4xl font-switzer-md mb-10">Admin Dashboard</h3>

    <!--    image-->
    <figure>
      <img alt="Astradrop Admin Dashboard" src="/image/Astradrop/astradrop-admin-dashboard.png" />
      <figcaption class="mt-5">
        <p class="text-[#484848] font-switzer-regular text-lg">
          The Astradrop Admin Dashboard was designed to give administrators a comprehensive view of
          platform activities, <br />
          helping them monitor deliveries, manage users, and optimize operations efficiently. The
          focus was on clarity, data <br />
          accessibility, and ease of use, ensuring that admins can make quick decisions without
          being overwhelmed.
        </p>
      </figcaption>
    </figure>
    <!--    image-->
  </sectionCard>
  <!--  Admin Dashboard-->

  <!--  Mobile Application-->
  <sectionCard class="mt-32">
    <h3 class="text-[#000] text-4xl font-switzer-md mb-10">Mobile Application</h3>

    <!--    image-->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <figure v-for="(images, index) in mobileAppImages" :key="index">
        <img :alt="images.altText" :src="images.image" />
      </figure>
    </section>
    <p class="text-[#484848] font-switzer-regular text-lg mt-5">
      The Astradrop Mobile App was built to provide a seamless experience for both businesses and
      riders, ensuring efficient <br />
      delivery management on the go. The app is designed with two core experiences—one for
      businesses to request and <br />
      track deliveries, and another for riders to accept and complete orders.
    </p>
    <!--    image-->

    <!--    key features-->
    <h3 class="text-[#000] text-4xl font-switzer-md mb-10 mt-10">Key Features</h3>

    <!--    list business app-->
    <h4 class="underline font-switzer-md text-2xl mb-8">Business App</h4>
    <ul v-for="(items, index) in busniessApp" :key="index">
      <li class="flex items-center gap-2 text-[#484848] font-switzer-regular">
        <Icon :icon="items.icon" height="32" width="32" />
        {{ items.text }}
      </li>
    </ul>
    <!--    list business app-->

    <!--    list business app-->
    <h4 class="underline font-switzer-md text-2xl mt-10 mb-8">Rider’s App</h4>
    <ul v-for="(items, index) in ridersApp" :key="index">
      <li class="flex items-center gap-2 text-[#484848] font-switzer-regular">
        <Icon :icon="items.icon" height="32" width="32" />
        {{ items.text }}
      </li>
    </ul>
    <!--    list business app-->
    <!--    key features-->
  </sectionCard>
  <!--  Mobile Application-->

  <!--  Astrodrop-->
  <sectionCard class="mt-32">
    <h4 class="font-switzer-md text-4xl mb-8">Astradrop</h4>

    <p class="font-switzer-regular text-lg mb-5">
      Astradrop streamlines delivery management with features like real-time order tracking, rider
      dispatch, secure payments, and automated notifications <br />
      for businesses and customers.
    </p>
    <p class="font-switzer-regular text-lg mb-5">
      As a Product Designer, I focused on creating an intuitive and seamless experience by designing
      workflows that simplify order management, optimize <br />
      rider allocation, and enhance delivery tracking. I leveraged user research to address key
      logistics challenges, incorporating features like smart route <br />
      suggestions, transparent pricing, and real-time delivery updates to improve efficiency.
    </p>
    <p class="font-switzer-regular text-lg">
      Designed for businesses and independent riders, Astradrop enhances operational efficiency,
      ensures timely deliveries, and boosts customer <br />
      satisfaction. The platform is available on web and mobile, providing an effortless,
      user-friendly experience for managing deliveries with ease.
    </p>
  </sectionCard>
  <!--  Astrodrop-->

  <!--  see also-->
  <SectionCard class="mt-32">
    <h4 class="font-switzer-md text-4xl mb-8">See also</h4>

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
          class="absolute inset-0 top-20 px-12 text-start flex flex-col flex-wrap items-start justify-start opacity-0 invisible group-hover:visible group-hover:text-white group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-9999"
        >
          <h1 class="font-switzer-sm-bold text-4xl mb-8">{{ mywork.mainHeader }}</h1>
          <p class="font-switzer-md text-2xl leading-normal">{{ mywork.subText }}</p>
        </AppLink>
      </figure>
    </section>
    <!--      images-->
  </SectionCard>
  <!--  -->
</template>

<style scoped>
.astradrop-hero-img {
  background-image: url('/public/image/Astradrop/astradrop-hero.png');
}
</style>
