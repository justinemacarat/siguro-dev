<script>
import Header from "@layout/Header.vue";
import Homes from "@views/Homes.vue";
import Landscape from "@views/Landscape.vue";
import Location from "@views/Location.vue";
import Lifestyle from "@views/Lifestyle.vue";
import Interested from "@views/Interested.vue";
import Footer from "@layout/Footer.vue";
import ContactDetails from "@views/ContactDetails.vue";

export default {
  components: {
    Header,
    Homes,
    Landscape,
    Location,
    Lifestyle,
    Interested,
    ContactDetails,
    Footer
  },
};
</script>

<template>
  <div class="bg-beige min-h-screen flex flex-col items-center justify-center">
    <Header/>
    <div class="text-black pt-24 w-full max-w-7xl mx-auto text-center">
      <div class="md:px-32">
        <h1 class="mb-4 text-4xl font-medium leading-none tracking-tight text-black md:text-5xl lg:text-6xl">The modern way of living in Drumbeg</h1>
        <p class="mb-6 text-lg font-normal text-black sm:px-16 xl:px-48">Enjoy your own studio apartment, share extraordinary living and working spaces and connect with great people at daily events.</p>
        <button type="button" class="text-white bg-darkGreen font-medium text-sm px-8 py-3 text-center">Register Interest</button>
      </div>
      <Homes/>
      <Landscape/>
      <Lifestyle/>
      <Location/>
      <Interested/>
    </div>
  </div>

  <ContactDetails/>
  
  <div class="bg-darkGreen flex flex-col">
      <Footer/>
  </div>
</template>

<style>
  h1,h2, .site-name {
    font-family: Roslindale;
  }
</style>