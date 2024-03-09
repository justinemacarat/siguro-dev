<script>
// import Header from "@layout/Header.vue";

// export default {
//   components: {
//     Header,
//   },
// };
</script>

<template>

  <div class="flex flex-col items-end w-full h-screen p-4 space-y-2 bg-gray-200">



    

    <div class="relative w-40 overflow-hidden border border-gray-100 rounded-md shadow-xl group">
      
      <button class="absolute top-0 right-0 z-30 p-1.5 rounded-lg hover:bg-black/40 group-hover:opacity-100 opacity-0 transition duration-200 ease-in-out"><svg class="w-5 h-5 text-white" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></button>

      <div class="absolute inset-0 z-20 flex items-center justify-center bg-black/60">
        <div class="flex items-center space-x-2 text-white">
          <svg class="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          <span>Saving...</span>
        </div>
      </div>

      <img class="w-full" src="https://picsate.sfo3.cdn.digitaloceanspaces.com/1/thumbnails/0228202404261065deb5e2bfdcb.jpg" alt="">
      
    </div>





    <div class="relative w-40 overflow-hidden border border-gray-100 rounded-md shadow-xl group">

      <button class="absolute top-0 right-0 z-30 p-1.5 rounded-lg hover:bg-black/40 group-hover:opacity-100 opacity-0 transition duration-200 ease-in-out"><svg class="w-5 h-5 text-white" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></button>

      <div class="absolute inset-0 z-20 flex items-center justify-center bg-red-800/60">
        <div class="flex items-center space-x-2 text-white" aria-label="Whoops! Looks like you're not logged in." data-microtip-position="top" role="tooltip">
          <svg class="w-6 h-6 text-white" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
          <span>Error</span>
        </div>
      </div>

      <img class="w-full" src="https://picsate.sfo3.cdn.digitaloceanspaces.com/1/thumbnails/0228202402292365de9a83ede23.jpg" alt="">
    </div>





    
    <div class="relative w-40 overflow-hidden border border-gray-100 rounded-md shadow-xl group">

      <button class="absolute top-0 right-0 z-30 p-1.5 rounded-lg hover:bg-black/40 group-hover:opacity-100 opacity-0 transition duration-200 ease-in-out"><svg class="w-5 h-5 text-white" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></button>

      <div class="absolute inset-0 z-20 flex items-center justify-center bg-green-800/80">
        <div class="flex items-center space-x-2 text-white">
          <svg class="w-6 h-6" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
          <span>Saved</span>
        </div>
      </div>

      <img class="w-full" src="https://picsate.sfo3.cdn.digitaloceanspaces.com/1/thumbnails/0228202402185065de980a9f72b.jpg" alt="">

    </div>



    

  </div>

</template>
