<script>
// import Header from "@layout/Header.vue";

// export default {
//   components: {
//     Header,
//   },
// };
</script>

<template>
  
  <div>
    <header class="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
    <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex flex-1 items-center gap-x-6">
        <button type="button" class="-m-3 p-3 md:hidden">
          <span class="sr-only">Open main menu</span>
          <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
          </svg>
        </button>
        <svg class="h-7" viewBox="0 0 552 112" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M57.7857 29.8278C57.7857 44.283 46.0674 56.0012 31.6122 56.0012H5.43872V29.8278C5.43872 15.3725 17.157 3.6543 31.6122 3.6543C46.0674 3.6543 57.7857 15.3725 57.7857 29.8278Z" fill="#4FA2FF"/><path d="M57.7856 82.1754C57.7856 67.7202 69.5039 56.002 83.9591 56.002H110.133V82.1754C110.133 96.6306 98.4143 108.349 83.9591 108.349C69.5039 108.349 57.7856 96.6306 57.7856 82.1754Z" fill="#4FA2FF"/><path d="M5.43872 82.1754C5.43872 96.6306 17.157 108.349 31.6122 108.349H57.7857V82.1754C57.7857 67.7202 46.0674 56.002 31.6122 56.002C17.157 56.002 5.43872 67.7202 5.43872 82.1754Z" fill="#4FA2FF"/><path d="M110.133 29.8278C110.133 15.3725 98.4143 3.6543 83.9591 3.6543H57.7856V29.8278C57.7856 44.283 69.5039 56.0012 83.9591 56.0012C98.4143 56.0012 110.133 44.283 110.133 29.8278Z" fill="#4FA2FF"/><path d="M184.266 83.9365V93.1525C163.53 94.6885 159.786 90.8485 159.786 72.3205V17.3125H174.858V75.2005C174.858 81.5365 176.97 83.8405 184.266 83.9365Z" fill="black"/><path d="M211.002 94.6885C194.874 94.6885 184.122 83.7445 184.122 68.0965C184.122 52.5445 195.066 41.6965 210.426 41.6965C224.634 41.6965 234.714 52.1605 234.714 67.1365V71.6485H199.386C199.866 79.5205 204.378 85.4725 210.906 85.4725C215.706 85.4725 218.874 82.4005 219.45 78.2725H233.946C232.122 87.9685 223.77 94.6885 211.002 94.6885ZM199.482 63.5845H219.546C219.354 56.1925 215.706 50.9125 210.234 50.9125C204.57 50.9125 200.346 56.1925 199.482 63.5845Z" fill="black"/><path d="M256.113 94.6885C245.073 94.6885 237.873 89.2165 237.873 80.2885C237.873 72.6085 243.057 67.9045 256.017 65.0245L263.025 63.3925C268.881 62.0485 271.185 60.2245 271.185 57.3445C271.185 53.6965 268.209 50.9125 263.025 50.9125C257.265 50.9125 254.097 54.2725 254.097 58.8805H238.929C238.929 48.5125 248.145 41.6965 263.313 41.6965C277.425 41.6965 286.257 47.9365 286.257 60.4165V74.6245C286.257 80.8645 287.697 83.9365 293.649 83.9365V93.1525C281.553 95.0725 275.313 91.0405 274.449 82.4965C272.337 89.0245 265.425 94.6885 256.113 94.6885ZM259.857 85.4725C266.289 85.4725 271.185 78.9445 271.185 71.4565V68.5765C270.225 69.8245 267.921 70.9765 264.753 71.8405L260.625 73.0885C255.249 74.5285 252.945 76.6405 252.945 79.8085C252.945 83.4565 255.345 85.4725 259.857 85.4725Z" fill="black"/><path d="M316.013 93.1525H300.845V52.5445H290.189V43.2325H300.845C300.845 27.4885 309.005 19.8085 327.053 21.8245V31.6165C318.413 30.9445 316.013 35.1685 316.013 43.2325H329.453V52.5445H316.013V93.1525Z" fill="black"/><path d="M362.451 94.6885C356.115 94.6885 350.067 91.1365 347.091 85.7605V93.1525H332.019V17.3125H347.091V50.6245C350.067 45.2485 356.211 41.6965 362.451 41.6965C375.411 41.6965 384.051 52.0645 384.051 68.0005C384.051 83.9365 375.411 94.4965 362.451 94.6885ZM357.843 85.4725C364.563 85.4725 368.883 78.4645 368.883 68.0965C368.883 57.8245 364.563 50.9125 357.843 50.9125C350.931 50.9125 346.515 57.8245 346.515 68.0965C346.515 78.4645 350.931 85.4725 357.843 85.4725Z" fill="black"/><path d="M404.812 94.6885C393.772 94.6885 386.572 89.2165 386.572 80.2885C386.572 72.6085 391.756 67.9045 404.716 65.0245L411.724 63.3925C417.58 62.0485 419.884 60.2245 419.884 57.3445C419.884 53.6965 416.908 50.9125 411.724 50.9125C405.964 50.9125 402.796 54.2725 402.796 58.8805H387.628C387.628 48.5125 396.844 41.6965 412.012 41.6965C426.124 41.6965 434.956 47.9365 434.956 60.4165V74.6245C434.956 80.8645 436.396 83.9365 442.348 83.9365V93.1525C430.252 95.0725 424.012 91.0405 423.148 82.4965C421.036 89.0245 414.124 94.6885 404.812 94.6885ZM408.556 85.4725C414.988 85.4725 419.884 78.9445 419.884 71.4565V68.5765C418.924 69.8245 416.62 70.9765 413.452 71.8405L409.324 73.0885C403.948 74.5285 401.644 76.6405 401.644 79.8085C401.644 83.4565 404.044 85.4725 408.556 85.4725Z" fill="black"/><path d="M459.505 93.1525H444.433V43.2325H459.505V50.5285C463.633 44.3845 469.873 41.6965 476.497 41.6965C486.961 41.6965 493.201 48.2245 493.201 64.5445V93.1525H478.129V63.9685C478.129 56.2885 475.345 51.3925 469.969 51.3925C463.441 51.3925 459.505 57.1525 459.505 66.6565V93.1525Z" fill="black"/><path d="M514.446 93.1525H499.374V17.3125H514.446V59.1685L531.342 43.2325H548.91L527.598 62.7205L551.214 93.1525H534.126L517.998 71.7445L514.446 74.9125V93.1525Z" fill="black"/></svg>

      </div>
      
      <div class="relative w-full max-w-md rounded-md shadow-sm">
	<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" aria-hidden="true">
		<svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg>
	</div>
	<input type="text" name="dhasdjashj" id="dhasdjashj" class="block !text-sm w-full rounded-md border-0 py-2 px-6 pl-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 transition duration-300 ease-in-out sm:text-sm sm:leading-6" placeholder="Search">
</div>

      <div class="flex flex-1 items-center justify-end gap-x-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your profile</span>
          <img class="h-8 w-8 rounded-full bg-gray-800" src="https://randomuser.me/api/portraits/women/79.jpg" alt="">
        </a>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
        <div class="-ml-0.5 flex h-16 items-center gap-x-6">
          <button type="button" class="-m-2.5 p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="-ml-0.5">
            <a href="#" class="-m-1.5 block p-1.5">
              <span class="sr-only">Your Company</span>
            </a>
          </div>
        </div>
        <div class="mt-2 space-y-2">
          <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
          <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Invoices</a>
          <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Clients</a>
          <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Expenses</a>
        </div>
      </div>
    </div>
    </header>
    
    <main>
    <div class="relative isolate overflow-hidden pt-16">
      <!-- Secondary navigation -->
      <header class="pb-4 pt-6 sm:pb-6">
        <div class="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
          <h1 class="text-base font-semibold leading-7 text-gray-900">Cashflow</h1>
          <div class="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
            <a href="#" class="text-primary-500">Last 7 days</a>
            <a href="#" class="text-gray-700">Last 30 days</a>
            <a href="/creating-international-payments/" class="text-gray-700">All-time</a>
          </div>
          <a href="#" class="ml-auto flex items-center gap-x-1 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
            <svg class="-ml-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
            </svg>
            New invoice
          </a>
        </div>
      </header>
      <!-- Stats -->
      <div class="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
        <dl class="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
          <div class="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8">
            <dt class="text-sm font-medium leading-6 text-gray-500">Revenue</dt>
            <dd class="text-xs font-medium text-gray-700">+4.75%</dd>
            <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">$405,091.00</dd>
          </div>
          <div class="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 sm:border-l">
            <dt class="text-sm font-medium leading-6 text-gray-500">Overdue invoices</dt>
            <dd class="text-xs font-medium text-rose-600">+54.02%</dd>
            <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">$12,787.00</dd>
          </div>
          <div class="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 lg:border-l">
            <dt class="text-sm font-medium leading-6 text-gray-500">Outstanding invoices</dt>
            <dd class="text-xs font-medium text-gray-700">-1.39%</dd>
            <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">$245,988.00</dd>
          </div>
          <div class="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 sm:border-l">
            <dt class="text-sm font-medium leading-6 text-gray-500">Expenses</dt>
            <dd class="text-xs font-medium text-rose-600">+10.18%</dd>
            <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">$30,156.00</dd>
          </div>
        </dl>
      </div>
      <div class="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50" aria-hidden="true">
        <div class="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-primary-500 to-primary-100" style="clip-path: polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)"></div>
      </div>
    </div>
    <div class="space-y-16 py-16 xl:space-y-20">
      <!-- Recent activity table -->
      <div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h2 class="mx-auto max-w-2xl text-lg font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">Recent activity</h2>


        </div>
        <div class="mt-6 overflow-hidden border-t border-gray-100">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <table class="w-full text-left">
                <thead class="sr-only">
                  <tr>
                    <th>Amount</th>
                    <th class="hidden sm:table-cell">Client</th>
                    <th>More details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-sm leading-6 text-gray-900">
                    <th scope="colgroup" colspan="3" class="relative isolate py-2 font-semibold">
                      <time datetime="2023-03-22">Today</time>
                      <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                      <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                    </th>
                  </tr>
                  <tr>
                    <td class="relative py-5 pr-6">
                      <div class="flex gap-x-6">
                        <svg class="hidden h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                        </svg>
                        <div class="flex-auto">
                          <div class="flex items-start gap-x-3">
                            <div class="text-sm font-medium leading-6 text-gray-900">$7,600.00 USD</div>
                            <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">Paid</div>
                          </div>
                          <div class="mt-1 text-xs leading-5 text-gray-500">$500.00 tax</div>
                        </div>
                      </div>
                      <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                      <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                    </td>
                    <td class="hidden py-5 pr-6 sm:table-cell">
                      <div class="text-sm leading-6 text-gray-900">Amplitude</div>
                      <div class="mt-1 text-xs leading-5 text-gray-500"></div>
                    </td>
                    <td class="py-5 text-right">
                      <div class="flex justify-end">
                        <a href="#" class="text-sm font-medium leading-6 text-primary-500 hover:text-primary-500">View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #00012, Reform</span></a>
                      </div>
                      <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#00012</span></div>
                    </td>
                  </tr>
                  <tr>
                    <td class="relative py-5 pr-6">
                      <div class="flex gap-x-6">
                        <svg class="hidden h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z" clip-rule="evenodd" />
                        </svg>
                        <div class="flex-auto">
                          <div class="flex items-start gap-x-3">
                            <div class="text-sm font-medium leading-6 text-gray-900">$10,000.00 USD</div>
                            <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-gray-600 bg-gray-50 ring-gray-500/10">Withdraw</div>
                          </div>
                        </div>
                      </div>
                      <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                      <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                    </td>
                    <td class="hidden py-5 pr-6 sm:table-cell">
                      <div class="text-sm leading-6 text-gray-900">Michael Collins</div>
                      <div class="mt-1 text-xs leading-5 text-gray-500">Salary</div>
                    </td>
                    <td class="py-5 text-right">
                      <div class="flex justify-end">
                        <a href="#" class="text-sm font-medium leading-6 text-primary-500 hover:text-primary-500">View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #00011, Tom Cook</span></a>
                      </div>
                      <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#00011</span></div>
                    </td>
                  </tr>
                  <tr>
                    <td class="relative py-5 pr-6">
                      <div class="flex gap-x-6">
                        <svg class="hidden h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
                        </svg>
                        <div class="flex-auto">
                          <div class="flex items-start gap-x-3">
                            <div class="text-sm font-medium leading-6 text-gray-900">$2,000.00 USD</div>
                            <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-red-700 bg-red-50 ring-red-600/10">Overdue</div>
                          </div>
                          <div class="mt-1 text-xs leading-5 text-gray-500">$130.00 tax</div>
                        </div>
                      </div>
                      <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                      <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                    </td>
                    <td class="hidden py-5 pr-6 sm:table-cell">
                      <div class="text-sm leading-6 text-gray-900">Acme Contractors</div>
                      <div class="mt-1 text-xs leading-5 text-gray-500">Logo design</div>
                    </td>
                    <td class="py-5 text-right">
                      <div class="flex justify-end">
                        <a href="#" class="text-sm font-medium leading-6 text-primary-500 hover:text-primary-500">View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #00009, Tuple</span></a>
                      </div>
                      <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#00009</span></div>
                    </td>
                  </tr>
                  <tr class="text-sm leading-6 text-gray-900">
                    <th scope="colgroup" colspan="3" class="relative isolate py-2 font-semibold">
                      <time datetime="2023-03-21">Yesterday</time>
                      <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                      <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                    </th>
                  </tr>
                  <tr>
                    <td class="relative py-5 pr-6">
                      <div class="flex gap-x-6">
                        <svg class="hidden h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                        </svg>
                        <div class="flex-auto">
                          <div class="flex items-start gap-x-3">
                            <div class="text-sm font-medium leading-6 text-gray-900">$14,000.00 USD</div>
                            <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">Paid</div>
                          </div>
                          <div class="mt-1 text-xs leading-5 text-gray-500">$900.00 tax</div>
                        </div>
                      </div>
                      <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                      <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                    </td>
                    <td class="hidden py-5 pr-6 sm:table-cell">
                      <div class="text-sm leading-6 text-gray-900">Fivetran</div>
                      <div class="mt-1 text-xs leading-5 text-gray-500">Invoice</div>
                    </td>
                    <td class="py-5 text-right">
                      <div class="flex justify-end">
                        <a href="#" class="text-sm font-medium leading-6 text-primary-500 hover:text-primary-500">View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #00010, SavvyCal</span></a>
                      </div>
                      <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#00010</span></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Recent client list-->
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="flex items-center justify-between">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Recent clients</h2>
            <a href="#" class="text-sm font-semibold leading-6 text-primary-500 hover:text-primary-500">View all<span class="sr-only">, clients</span></a>
          </div>
          <ul role="list" class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
            <li class="overflow-hidden rounded-xl border border-gray-200">
              <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                <img src="@assets/mixpanel.svg" alt="Tuple" class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10">
                <div class="text-sm font-medium leading-6 text-gray-900">Mixpanel</div>
                <div class="relative ml-auto">
                  <button type="button" class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open options</span>
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                    </svg>
                  </button>
                </div>
              </div>
              <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                <div class="flex justify-between gap-x-4 py-3">
                  <dt class="text-gray-500">Last invoice</dt>
                  <dd class="text-gray-700"><time datetime="2022-12-13">December 13, 2022</time></dd>
                </div>
                <div class="flex justify-between gap-x-4 py-3">
                  <dt class="text-gray-500">Amount</dt>
                  <dd class="flex items-start gap-x-2">
                    <div class="font-medium text-gray-900">$2,000.00</div>
                    <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-orange-500 bg-red-50 ring-red-600/10">Awaiting</div>
                  </dd>
                </div>
              </dl>
            </li>
            <li class="overflow-hidden rounded-xl border border-gray-200">
              <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                <img src="@assets/amplitude.svg" alt="SavvyCal" class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10">
                <div class="text-sm font-medium leading-6 text-gray-900">Amplitude</div>
                <div class="relative ml-auto">
                  <button type="button" class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500" id="options-menu-1-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open options</span>
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                    </svg>
                  </button>
                </div>
              </div>
              <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                <div class="flex justify-between gap-x-4 py-3">
                  <dt class="text-gray-500">Last invoice</dt>
                  <dd class="text-gray-700"><time datetime="2023-01-22">January 22, 2023</time></dd>
                </div>
                <div class="flex justify-between gap-x-4 py-3">
                  <dt class="text-gray-500">Amount</dt>
                  <dd class="flex items-start gap-x-2">
                    <div class="font-medium text-gray-900">$14,000.00</div>
                    <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">Paid</div>
                  </dd>
                </div>
              </dl>
            </li>
            <li class="overflow-hidden rounded-xl border border-gray-200">
              <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                <img src="@assets/fivetran.svg" alt="Reform" class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10">
                <div class="text-sm font-medium leading-6 text-gray-900">Fivetran</div>
                <div class="relative ml-auto">
                  <button type="button" class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500" id="options-menu-2-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open options</span>
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                    </svg>
                  </button>
                </div>
              </div>
              <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                <div class="flex justify-between gap-x-4 py-3">
                  <dt class="text-gray-500">Last invoice</dt>
                  <dd class="text-gray-700"><time datetime="2023-01-23">January 23, 2023</time></dd>
                </div>
                <div class="flex justify-between gap-x-4 py-3">
                  <dt class="text-gray-500">Amount</dt>
                  <dd class="flex items-start gap-x-2">
                    <div class="font-medium text-gray-900">$7,600.00</div>
                    <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">Paid</div>
                  </dd>
                </div>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </main>
  </div>

</template>
