<script lang="ts" setup>
import SectionCard from '@/components/SectionCard.vue'
import { Icon } from '@iconify/vue'
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
        class="bg-gradient-to-b from-[#D8C3F4] to-[#8631F4] text-white rounded-full px-6 py-2 font-switzer-regular text-xl"
      >
        <a class="flex items-center gap-2" href="https://astradrop.com/" target="_blank">
          <span>
            <Icon height="16" icon="codicon:link" width="16" />
          </span>
          See Live Website
        </a>
      </button>

      <button
        class="text-[#090909]/50 border border-[#EDEDED] hover:bg-[#F2F2F2] transition-all duration-500 rounded-full px-6 py-4 font-switzer-regular text-lg"
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
    <section class="flex justify-between mb-20">
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
        <ul class="list-disc font-switzer-regular text-[#484848] text-lg">
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
</template>

<style scoped>
.astradrop-hero-img {
  background-image: url('/public/image/Astradrop/astradrop-hero.png');
}
</style>
