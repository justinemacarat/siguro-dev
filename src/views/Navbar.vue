<template>
    <nav class="bg-transparent w-full z-20 top-0 start-0">
        <div class="w-full max-w-7xl mx-auto p-4 flex flex-wrap items-center justify-between">
            <a href="#" class="flex items-center space-x-3">
                <img src="@/assets/navlogo.svg" class="h-8" >
                <span class="self-center text-2xl text-darkGreen font-semibold whitespace-nowrap site-name">Quarterlands Farm</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0">
                <button type="button" class="text-white bg-darkGreen font-medium text-sm px-8 py-3 text-center">Register Interest</button>
                <button data-collapse-toggle="navbar" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0">
                    <li>
                        <a href="#" class="block py-2 px-3 text-black">Homes</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-black">Landscape</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-black">Lifestyle</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-black">Location</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>