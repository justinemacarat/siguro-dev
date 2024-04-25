<template>
    <div class="my-40 w-full max-w-7xl px-16">
        <div class="flex flex-col justify-center text-center md:px-44 mb-14">
            <div class="flex items-center justify-center">
                <hr class="w-12 h-0.5 my-8 mr-4 bg-beige-100 border-0 rounded">
                <span class="text-sm tracking-widest font-medium mr-4 text-beige-200">INTERESTED</span>
                <hr class="w-12 h-0.5 my-8 mr-4 bg-beige-100 border-0 rounded">
            </div>
            <h2 class="text-3xl font-medium md:text-5xl lg:text-5xl">Register your interest today and get notified</h2>
        </div>
        <div class="flex justify-center">
            <form @submit.prevent="submitForm" class="bg-beige-100 shadow-md rounded p-14 w-5/6">
                <div class="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <input class="border border-2 border-gray-600/25 bg-beige rounded w-full p-3 text-gray-700 leading-tight text-sm" id="name" type="text" placeholder="Name">                        
                    </div>
                    <div class="sm:col-span-3">
                        <input class="border border-2 border-gray-600/25 bg-beige rounded w-full p-3 text-gray-700 leading-tight text-sm" id="email" type="text" placeholder="Email Address">                        
                    </div>
                    <div class="sm:col-span-3">
                        <input class="border border-2 border-gray-600/25 bg-beige rounded w-full p-3 text-gray-700 leading-tight text-sm " id="phone" type="text" placeholder="Phone #">                        
                    </div>
                    <div class="sm:col-span-3">
                        <input class="border border-2 border-gray-600/25 bg-beige rounded w-full p-3 text-gray-700 leading-tight text-sm" id="budget" type="text" placeholder="Budget £">                        
                    </div>
                    <div class="col-span-full">
                        <button type="button" class="w-full text-white bg-darkGreen font-medium text-sm px-8 py-3 text-center">Register Interest</button>                      
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>