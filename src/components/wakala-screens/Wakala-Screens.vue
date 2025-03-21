<script lang="ts" setup>
import SectionCard from '@/components/SectionCard.vue'
import AppCard from '@/components/AppCard.vue'
</script>

<template>
  <SectionCard class="mt-32">
    <AppCard
      default-class="mb-20 flex-col flex-col-reverse lg:flex-row "
      image="/image/Wakala/Onboarding-Screen.png"
      image-alt="Onboarding Screen"
      main-header="Onboarding Screen"
      main-text="The onboarding screen for WakalaPay was designed with clarity and ease in mind. From the moment users launch the app, they’re guided through a smooth, intuitive process that highlights key features—seamless crypto-to-cash conversion, low fees, and secure transactions. The design focuses on simplicity, using clean layouts, engaging visuals, and concise messaging to ensure users quickly understand the value of WakalaPay."
    />

    <AppCard
      default-class="flex-col-reverse lg:flex-row-reverse mb-20"
      image="/image/Wakala/Authentication-Screen.png"
      image-alt="Authentication Screen"
      main-header="Authentication Screen"
      main-text="The authentication screen for WakalaPay is designed to be secure, intuitive, and user-friendly. With a minimal yet functional layout, users can effortlessly log in or sign up using their email, phone number, or biometric authentication for a faster experience. The design ensures clarity with clear input fields, error handling, and a seamless flow that eliminates friction."
    />

    <AppCard
      default-class="mb-20 flex-col flex-col-reverse lg:flex-row"
      image="/image/Wakala/Wallet-Connection.png"
      image-alt="Wallet Connection"
      main-header="Wallet Connection"
      main-text="The wallet connection screens for WakalaPay are designed for seamless and secure access, ensuring users can quickly link their crypto wallets with minimal effort. The interface supports multiple connection methods, including QR scanning, wallet extensions, and manual key input, giving users flexibility"
    />

    <AppCard
      default-class="flex-col-reverse lg:flex-row-reverse mb-20"
      image="/image/Wakala/Home-Screen.png"
      image-alt="Home Screen"
      main-header="HomeScreen"
      main-text="To enhance user engagement, the homepage also includes a referral section, guiding users on how to invite friends and earn rewards. Every element is structured to provide a seamless experience, ensuring users can navigate effortlessly while maintaining full control over their funds"
    />

    <AppCard
      default-class="mb-20 flex-col flex-col-reverse lg:flex-row"
      image="/image/Wakala/Bank-Details.png"
      image-alt="Add Bank Details Screen"
      main-header="Add Bank Details"
      main-text="The Bank Details screen in WakalaPay ensures a smooth and secure way for users to link their local bank accounts. 🔗💳"
      sub-text="Since seamless cashing out is essential, this screen is designed with simplicity in mind—users can add their bank name, account number, and verify ownership effortlessly. With clear feedback and security measures in place, WakalaPay ensures that withdrawals are fast and hassle-free."
    />

    <!--    conversion screen-->
    <AppCard
      default-class="flex-col-reverse items-center justify-center lg:text-center mb-20"
      image="/image/Wakala/Conversion-Screen.png"
      image-alt="Conversion Screen"
      main-header="Conversion Screen"
      main-text="Designed for simplicity and speed, users can seamlessly convert their crypto to another crypto or to local currency (Naira) at real-time exchange rates. The interface provides clarity on the amount, fees (gas + platform fee), and final balance before confirming. 🔥"
    />
    <!--    conversion screen-->

    <!--    Website screen-->
    <AppCard
      default-class="flex-col-reverse gap-0 lg:gap-[80px] text-start lg:text-center mb-0"
      image="/image/Wakala/Wakala-web-hero.png"
      image-alt="Wakala Website Hero Screen"
      main-header="Website Design"
    />

    <AppCard
      default-class="flex-col-reverse items-center justify-center gap-[10px] lg:gap-[20px] mb-20"
      image="/image/Wakala/Website-hero.png"
      image-alt="Website Screen"
    />
    <!--    website screen-->
  </SectionCard>
</template>

<style scoped></style>
