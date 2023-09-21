

<template>
 <div
  x-show="mobileMenu"
  class="fixed inset-0 z-[100] flex"
  x-cloak
  x-ref="dialog"
  aria-modal="true"
 >
  <div
   x-show="mobileMenu"
   x-transition:enter="transition-opacity ease-linear duration-300"
   x-transition:enter-start="opacity-0"
   x-transition:enter-end="opacity-100"
   x-transition:leave="transition-opacity ease-linear duration-300"
   x-transition:leave-start="opacity-100"
   x-transition:leave-end="opacity-0"
   class="fixed inset-0 bg-black bg-opacity-75"
   x-description="Off-canvas menu overlay, show/hide based on off-canvas menu state."
   @click="mobileMenu = false"
   aria-hidden="true"
  ></div>

  <div
   x-show="mobileMenu"
   x-transition:enter="transition ease-in-out duration-300 transform"
   x-transition:enter-start="-translate-x-full"
   x-transition:enter-end="translate-x-0"
   x-transition:leave="transition ease-in-out duration-300 transform"
   x-transition:leave-start="translate-x-0"
   x-transition:leave-end="-translate-x-full"
   x-description="Off-canvas menu, show/hide based on off-canvas menu state."
   class="relative flex flex-col flex-1 w-full max-w-xs bg-black dark"
  >
   <div
    x-show="mobileMenu"
    x-transition:enter="ease-in-out duration-300"
    x-transition:enter-start="opacity-0"
    x-transition:enter-end="opacity-100"
    x-transition:leave="ease-in-out duration-300"
    x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0"
    x-description="Close button, show/hide based on off-canvas menu state."
    class="absolute top-0 right-0 pt-2 -mr-12"
   >
    <button
     type="button"
     class="
      flex
      items-center
      justify-center
      w-10
      h-10
      ml-1
      rounded-full
      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
     "
     @click="mobileMenu = false"
    >
     <span class="sr-only">Close sidebar</span>
     <svg
      class="w-6 h-6 text-white"
      x-description="Heroicon name: outline/x"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
     >
      <path
       stroke-linecap="round"
       stroke-linejoin="round"
       stroke-width="2"
       d="M6 18L18 6M6 6l12 12"
      ></path>
     </svg>
    </button>
   </div>

   <a href="/" class="flex-shrink-0"><img class="h-14" src="../assets/logo.svg" alt="logo" /></a>

   <nav
    class="
     flex flex-col flex-1
     py-8
     space-y-2
     overflow-y-scroll
     text-3xl
     divide-y divide-gray-800
    "
   >
    <a
     href=""
     class="px-6 py-3.5 flex items-center space-x-2 font-bold duration-200 font-heading uppercase ease-in-out text-white transition {{ if is_current || is_parent }} text-primary-500 {{ /if }}"
    >
      Link
    </a>
   </nav>

   <div class="flex justify-center w-full px-6 pb-6">

   </div>
  </div>

  <div class="flex-shrink-0 w-14" aria-hidden="true">
   <!-- Dummy element to force sidebar to shrink to fit close icon -->
  </div>
 </div>
</template>
