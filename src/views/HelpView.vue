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
    <div class="w-full">
      <div class="h-full lg:ml-72 xl:ml-80">
        <header
          class="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div
            class="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80"
          >
            <div class="flex">
              <a aria-label="Home" href="/"
                > <svg class="h-7" viewBox="0 0 552 112" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M57.7857 29.8278C57.7857 44.283 46.0674 56.0012 31.6122 56.0012H5.43872V29.8278C5.43872 15.3725 17.157 3.6543 31.6122 3.6543C46.0674 3.6543 57.7857 15.3725 57.7857 29.8278Z" fill="#17CF97"/><path d="M57.7856 82.1754C57.7856 67.7202 69.5039 56.002 83.9591 56.002H110.133V82.1754C110.133 96.6306 98.4143 108.349 83.9591 108.349C69.5039 108.349 57.7856 96.6306 57.7856 82.1754Z" fill="#17CF97"/><path d="M5.43872 82.1754C5.43872 96.6306 17.157 108.349 31.6122 108.349H57.7857V82.1754C57.7857 67.7202 46.0674 56.002 31.6122 56.002C17.157 56.002 5.43872 67.7202 5.43872 82.1754Z" fill="#17CF97"/><path d="M110.133 29.8278C110.133 15.3725 98.4143 3.6543 83.9591 3.6543H57.7856V29.8278C57.7856 44.283 69.5039 56.0012 83.9591 56.0012C98.4143 56.0012 110.133 44.283 110.133 29.8278Z" fill="#17CF97"/><path d="M184.266 83.9365V93.1525C163.53 94.6885 159.786 90.8485 159.786 72.3205V17.3125H174.858V75.2005C174.858 81.5365 176.97 83.8405 184.266 83.9365Z" fill="black"/><path d="M211.002 94.6885C194.874 94.6885 184.122 83.7445 184.122 68.0965C184.122 52.5445 195.066 41.6965 210.426 41.6965C224.634 41.6965 234.714 52.1605 234.714 67.1365V71.6485H199.386C199.866 79.5205 204.378 85.4725 210.906 85.4725C215.706 85.4725 218.874 82.4005 219.45 78.2725H233.946C232.122 87.9685 223.77 94.6885 211.002 94.6885ZM199.482 63.5845H219.546C219.354 56.1925 215.706 50.9125 210.234 50.9125C204.57 50.9125 200.346 56.1925 199.482 63.5845Z" fill="black"/><path d="M256.113 94.6885C245.073 94.6885 237.873 89.2165 237.873 80.2885C237.873 72.6085 243.057 67.9045 256.017 65.0245L263.025 63.3925C268.881 62.0485 271.185 60.2245 271.185 57.3445C271.185 53.6965 268.209 50.9125 263.025 50.9125C257.265 50.9125 254.097 54.2725 254.097 58.8805H238.929C238.929 48.5125 248.145 41.6965 263.313 41.6965C277.425 41.6965 286.257 47.9365 286.257 60.4165V74.6245C286.257 80.8645 287.697 83.9365 293.649 83.9365V93.1525C281.553 95.0725 275.313 91.0405 274.449 82.4965C272.337 89.0245 265.425 94.6885 256.113 94.6885ZM259.857 85.4725C266.289 85.4725 271.185 78.9445 271.185 71.4565V68.5765C270.225 69.8245 267.921 70.9765 264.753 71.8405L260.625 73.0885C255.249 74.5285 252.945 76.6405 252.945 79.8085C252.945 83.4565 255.345 85.4725 259.857 85.4725Z" fill="black"/><path d="M316.013 93.1525H300.845V52.5445H290.189V43.2325H300.845C300.845 27.4885 309.005 19.8085 327.053 21.8245V31.6165C318.413 30.9445 316.013 35.1685 316.013 43.2325H329.453V52.5445H316.013V93.1525Z" fill="black"/><path d="M362.451 94.6885C356.115 94.6885 350.067 91.1365 347.091 85.7605V93.1525H332.019V17.3125H347.091V50.6245C350.067 45.2485 356.211 41.6965 362.451 41.6965C375.411 41.6965 384.051 52.0645 384.051 68.0005C384.051 83.9365 375.411 94.4965 362.451 94.6885ZM357.843 85.4725C364.563 85.4725 368.883 78.4645 368.883 68.0965C368.883 57.8245 364.563 50.9125 357.843 50.9125C350.931 50.9125 346.515 57.8245 346.515 68.0965C346.515 78.4645 350.931 85.4725 357.843 85.4725Z" fill="black"/><path d="M404.812 94.6885C393.772 94.6885 386.572 89.2165 386.572 80.2885C386.572 72.6085 391.756 67.9045 404.716 65.0245L411.724 63.3925C417.58 62.0485 419.884 60.2245 419.884 57.3445C419.884 53.6965 416.908 50.9125 411.724 50.9125C405.964 50.9125 402.796 54.2725 402.796 58.8805H387.628C387.628 48.5125 396.844 41.6965 412.012 41.6965C426.124 41.6965 434.956 47.9365 434.956 60.4165V74.6245C434.956 80.8645 436.396 83.9365 442.348 83.9365V93.1525C430.252 95.0725 424.012 91.0405 423.148 82.4965C421.036 89.0245 414.124 94.6885 404.812 94.6885ZM408.556 85.4725C414.988 85.4725 419.884 78.9445 419.884 71.4565V68.5765C418.924 69.8245 416.62 70.9765 413.452 71.8405L409.324 73.0885C403.948 74.5285 401.644 76.6405 401.644 79.8085C401.644 83.4565 404.044 85.4725 408.556 85.4725Z" fill="black"/><path d="M459.505 93.1525H444.433V43.2325H459.505V50.5285C463.633 44.3845 469.873 41.6965 476.497 41.6965C486.961 41.6965 493.201 48.2245 493.201 64.5445V93.1525H478.129V63.9685C478.129 56.2885 475.345 51.3925 469.969 51.3925C463.441 51.3925 459.505 57.1525 459.505 66.6565V93.1525Z" fill="black"/><path d="M514.446 93.1525H499.374V17.3125H514.446V59.1685L531.342 43.2325H548.91L527.598 62.7205L551.214 93.1525H534.126L517.998 71.7445L514.446 74.9125V93.1525Z" fill="black"/></svg></a>
            </div>
            <nav class="hidden lg:mt-10 lg:block">
              <ul role="list">
                <li class="relative mt-6 md:mt-0">
                  <h2 class="text-sm font-semibold text-zinc-900 dark:text-white">Guides</h2>
                  <div class="relative mt-3 pl-2">
                    <div class="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5" style="height: 96px; top: 0px; opacity: 1; border-radius: 3.34728% / 8.33333%; transform: none; transform-origin: 50% 50% 0px;"></div>
                    <div class="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                    <div class="absolute left-2 h-6 w-px bg-primary-500" style="top: 4px; opacity: 1; transform: none; transform-origin: 50% 50% 0px;"
                    ></div>
                    <ul role="list" class="border-l border-transparent text-base space-y-2">
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 text-base transition pl-4 text-primary-600 font-semibold" href="/" aria-current="page"><span class="truncate">Creating international payments</span></a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Setting up wire drawdowns</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Adding and managing recipients</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Covering recipient fees</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Responding to a notification of change</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Processing times for payments</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Canceling a payment</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Sending checks</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Applying Xero categories</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Creating a new checking account</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Finding your wire details</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Disputing transactions</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Linking external bank accounts</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Depositing checks</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a class="flex justify-between gap-2 py-1 pr-3 transition pl-4 text-zinc-600 hover:text-zinc-900" href="/">
                          <span class="truncate">Nicknaming accounts</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div class="relative flex h-full flex-col px-4 pt-10 sm:px-6 lg:px-8">
          <main class="flex-auto">
            <article class="flex h-full flex-col pb-10 pt-6">
              <div class="flex-auto prose dark:prose-invert">
                <div
                  class="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden"
                >
                  <div
                    class="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]"
                  >
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"
                    >
                      <svg
                        aria-hidden="true"
                        class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                      >
                        <defs>
                          <pattern
                            id=":S2:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="-12"
                            y="4"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#:S2:)"
                        ></rect>
                        <svg x="-12" y="4" class="overflow-visible">
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="288"
                            y="168"
                          ></rect>
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="144"
                            y="56"
                          ></rect>
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="504"
                            y="168"
                          ></rect>
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="720"
                            y="336"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                    <svg
                      viewBox="0 0 1113 440"
                      aria-hidden="true"
                      class="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
                    >
                      <path
                        d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h1>Creating international payments</h1>
                
                <div class="prose">
                  <div class="styles__helpArticle_zW5K8"><p class="styles__body-default_BZuS2 styles__grey-dark_jESwG styles__normal_pZdxx styles__helpCenterP_I5JOB">You can send payments to eligible countries in a variety of currencies using a process similar to sending a domestic payment.</p><h2 class="styles__title-secondary_DP22k styles__helpCenterH2_R4GQS">Sending an international wire</h2><ol class="styles__list_jujLD styles__orderedList_FNKkP styles__normal_pZdxx"><li>Go to <strong class="styles__strong_jtBZ5">Move Money</strong> in the upper right corner of your dashboard, then select <span class="styles__blue_CHldH"><a target="_blank" class="hoverable styles__link_isEGW styles__no-visited-coloring_sCWRV styles__underline-onHover_aOL_i" href="/send-money/recurring"><strong class="styles__strong_jtBZ5">Pay Someone</strong></a></span>. <div class="styles__bannerDiv_BOfLN styles__default_hfiQf styles__banner_n1vSN" role="alert"><span class="styles__label_y_Eb6 styles__grey-dark_jESwG">You can also create a new payment by going to your Payments page and selecting <strong class="styles__strong_jtBZ5">Create Payment</strong>.</span></div></li><li>Select, create or invite a recipient. </li><li>When filling out the Payment Details section, select <strong class="styles__strong_jtBZ5">International Wire</strong> as the Method of payment from the dropdown and click <strong class="styles__strong_jtBZ5">Next</strong>. </li><li>Select your currency first, then enter the amount you want to send and which account to pay from.</li><li>Next, tell us more about the Purpose of the wire using the dropdown options. </li><li>You’ll be asked whether you want to send the payment immediately or select a date to schedule an upcoming payment.<br><div class="styles__bannerDiv_BOfLN styles__default_hfiQf styles__banner_n1vSN" role="alert"><span class="styles__label_y_Eb6 styles__grey-dark_jESwG">If you toggle “Repeat this payment,” you can set up a recurring payment that will automatically process on a schedule of your choosing.</span></div></li><li>Include optional additional details related to the payment such as memos or attachments </li><li>Review the payment details and click <strong class="styles__strong_jtBZ5">Send Payment</strong>.<br><div class="styles__bannerDiv_BOfLN styles__default_hfiQf styles__banner_n1vSN" role="alert"><span class="styles__label_y_Eb6 styles__grey-dark_jESwG">From your Review screen, you can optionally enter an email address (your own or someone else) to send an email receipt when the payment processes.</span></div></li></ol><h2 class="styles__title-secondary_DP22k styles__helpCenterH2_R4GQS">Tracking your payment</h2><p class="styles__body-default_BZuS2 styles__grey-dark_jESwG styles__normal_pZdxx styles__helpCenterP_I5JOB">Wires usually process within 2-3 days of the scheduled payment date.</p><p class="styles__body-default_BZuS2 styles__grey-dark_jESwG styles__normal_pZdxx styles__helpCenterP_I5JOB">Once sent, you should be able to view details (reflecting the USD amount deducted from your account) from <span class="styles__blue_CHldH"><a target="_blank" class="hoverable styles__link_isEGW styles__no-visited-coloring_sCWRV styles__underline-onHover_aOL_i" href="/transactions">your Transactions page</a></span>.</p><h2 class="styles__title-secondary_DP22k styles__helpCenterH2_R4GQS">Eligible countries</h2><p class="styles__body-default_BZuS2 styles__grey-dark_jESwG styles__normal_pZdxx styles__helpCenterP_I5JOB">International wires can be sent to the following countries.</p><ul class="styles__list_jujLD styles__unorderedList_YycLU styles__normal_pZdxx"><li>Aland Islands</li><li>Albania</li><li>Algeria</li><li>American Samoa</li><li>Andorra</li><li>Angola</li><li>Anguilla</li><li>Antigua &amp; Barbuda</li><li>Argentina</li><li>Armenia</li><li>Aruba</li><li>Australia</li><li>Austria</li><li>Azerbaijan</li><li>Bahamas</li><li>Bahrain</li><li>Bangladesh</li><li>Barbados</li><li>Belgium</li><li>Belize</li><li>Benin</li><li>Bermuda</li><li>Bhutan</li><li>Bolivia</li><li>Bosnia &amp; Herzegovina</li><li>Botswana</li><li>Brazil</li><li>British Indian Ocean Territory</li><li>British Virgin Islands</li><li>Brunei Darussalam</li><li>Bulgaria</li><li>Burkina Faso</li><li>Cambodia</li><li>Cameroon</li><li>Canada</li><li>Caribbean Netherlands</li><li>Cayman Islands</li><li>Chad</li><li>Channel Islands</li><li>Chile</li><li>China</li><li>Christmas Island</li><li>Cocos (Keeling) Islands</li><li>Colombia</li><li>Congo</li><li>Cook Islands</li><li>Costa Rica</li><li>Côte d'Ivoire</li><li>Crimea</li><li>Croatia</li><li>Curacao</li><li>Cyprus</li><li>Czech Republic</li><li>Denmark</li><li>Djibouti</li><li>Dominica</li><li>Dominican Republic</li><li>Ecuador</li><li>Egypt</li><li>El Salvador</li><li>Equatorial Guinea</li><li>Estonia</li><li>Ethiopia</li><li>Falkland Islands</li><li>Faroe Islands</li><li>Fiji</li><li>Finland</li><li>France</li><li>French Guiana</li><li>French Polynesia</li><li>French Southern Territories</li><li>Gabon</li><li>Gambia</li><li>Georgia</li><li>Germany</li><li>Ghana</li><li>Gibraltar</li><li>Great Britain</li><li>Greece</li><li>Greenland</li><li>Grenada</li><li>Guadeloupe</li><li>Guatemala</li><li>Guernsey</li><li>Guinea</li><li>Guinea-Bissau</li><li>Guyana</li><li>Haiti</li><li>Holy See (Vatican)</li><li>Honduras</li><li>Hong Kong</li><li>Hungary</li><li>Iceland</li><li>India</li><li>Indonesia</li><li>Ireland</li><li>Isle of Man</li><li>Israel</li><li>Italy</li><li>Ivory Coast (Cote d'Ivoire)</li><li>Jamaica</li><li>Japan</li><li>Jersey</li><li>Jordan</li><li>Kazakhstan</li><li>Kenya</li><li>Kiribati</li><li>Kosovo</li><li>Kuwait</li><li>Kyrgyz Republic (Kyrgyzstan)</li><li>Laos</li><li>Latvia</li><li>Lesotho</li><li>Liberia</li><li>Liechtenstein</li><li>Lithuania</li><li>Luxembourg</li><li>Macao</li><li>Macedonia</li><li>Madagascar</li><li>Malawi</li><li>Malaysia</li><li>Maldives</li><li>Mali</li><li>Malta</li><li>Marshall Islands</li><li>Martinique</li><li>Mauritania</li><li>Mauritius</li><li>Mayotte</li><li>Mexico</li><li>Micronesia</li><li>Moldova</li><li>Monaco</li><li>Mongolia</li><li>Montenegro</li><li>Montserrat</li><li>Morocco</li><li>Namibia</li><li>Nauru</li><li>Nepal</li><li>Netherlands</li><li>New Caledonia</li><li>New Zealand</li><li>Niger</li><li>Nigeria</li><li>Niue</li><li>Norfolk Island</li><li>Northern Mariana Islands</li><li>Norway</li><li>Oman</li><li>Pacific Islands</li><li>Pakistan</li><li>Palau</li><li>Palestine</li><li>Panama</li><li>Papua New Guinea</li><li>Paraguay</li><li>Peru</li><li>Philippines</li><li>Poland</li><li>Portugal</li><li>Qatar</li><li>Reunion</li><li>Romania</li><li>Rwanda</li><li>Saint Barthelemy</li><li>Saint Helena</li><li>Saint Kitts and Nevis</li><li>Saint Lucia</li><li>Saint Pierre &amp; Miquelon</li><li>Saint Vincent's &amp; Grenadines</li><li>Samoa</li><li>San Marino</li><li>Sao Tome and Principe</li><li>Senegal</li><li>Serbia</li><li>Sevastapol</li><li>Seychelles</li><li>Sierra Leone</li><li>Singapore</li><li>Sint Maarten</li><li>Slovakia</li><li>Slovenia</li><li>Solomon Islands</li><li>South Africa</li><li>South Georgia and the South Sandwich Islands</li><li>South Korea</li><li>Spain</li><li>Sri Lanka</li><li>Suriname</li><li>Swaziland</li><li>Sweden</li><li>Switzerland</li><li>Taiwan</li><li>Tajikistan</li><li>Tanzania</li><li>Thailand</li><li>Timor Leste</li><li>Togo</li><li>Tokelau</li><li>Tonga</li><li>Trinidad &amp; Tobago</li><li>Tunisia</li><li>Turkey</li><li>Turks and Caicos</li><li>Tuvalu</li><li>Uganda</li><li>Ukraine</li><li>United Arab Emirates (UAE)</li><li>United Kingdom</li><li>Uruguay</li><li>Uzbekistan</li><li>Vanuatu</li><li>Vietnam</li><li>Wallis &amp; Futuna</li><li>Western Sahara</li><li>Zambia</li></ul><div class="styles__wrapper_dQNYX"><div class="styles__body-large_Oi5sD">Did you find this article helpful?</div><div class="styles__articleFeedbackButtonContainer__N_nD"><button data-command="" type="button" class="styles__button_eo_Sf styles__small_kn2WB styles__secondary__QoZs styles__buttonWithContent_BycD1"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-up" class="svg-inline--fa fa-thumbs-up styles__icon_rh7Ps styles__left_e8OCi" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="font-size: 11px; line-height: 20px;"><path fill="currentColor" d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z"></path></svg><div class="styles__body-default_BZuS2"><span class="styles__body-default_BZuS2">Yes</span></div></button><button data-command="" type="button" class="styles__button_eo_Sf styles__small_kn2WB styles__secondary__QoZs styles__buttonWithContent_BycD1"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-down" class="svg-inline--fa fa-thumbs-down styles__icon_rh7Ps styles__left_e8OCi" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="font-size: 11px; line-height: 20px;"><path fill="currentColor" d="M128 288V64.03c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 320 128 305.7 128 288zM481.5 229.1c1.234-5.092 1.875-10.32 1.875-15.64c0-22.7-11.44-43.13-29.28-55.28c.4219-3.015 .6406-6.076 .6406-9.122c0-22.32-11.06-42.6-28.83-54.83c-2.438-34.71-31.47-62.2-66.8-62.2h-52.53c-35.94 0-71.55 11.87-100.3 33.41L169.6 92.93c-6.285 4.71-9.596 11.85-9.596 19.13c0 12.76 10.29 24.04 24.03 24.04c5.013 0 10.07-1.565 14.38-4.811l36.66-27.51c20.48-15.34 45.88-23.81 71.5-23.81h52.53c10.45 0 18.97 8.497 18.97 18.95c0 3.5-1.11 4.94-1.11 9.456c0 26.97 29.77 17.91 29.77 40.64c0 9.254-6.392 10.96-6.392 22.25c0 13.97 10.85 21.95 19.58 23.59c8.953 1.671 15.45 9.481 15.45 18.56c0 13.04-11.39 13.37-11.39 28.91c0 12.54 9.702 23.08 22.36 23.94C456.2 266.1 464 275.2 464 284.1c0 10.43-8.516 18.93-18.97 18.93H307.4c-12.44 0-24 10.02-24 23.1c0 4.038 1.02 8.078 3.066 11.72C304.4 371.7 312 403.8 312 411.2c0 8.044-5.984 20.79-22.06 20.79c-12.53 0-14.27-.9059-24.94-28.07c-24.75-62.91-61.74-99.9-80.98-99.9c-13.8 0-24.02 11.27-24.02 23.99c0 7.041 3.083 14.02 9.016 18.76C238.1 402 211.4 480 289.9 480C333.8 480 360 445 360 411.2c0-12.7-5.328-35.21-14.83-59.33h99.86C481.1 351.9 512 321.9 512 284.1C512 261.8 499.9 241 481.5 229.1z"></path></svg><div class="styles__body-default_BZuS2"><span class="styles__body-default_BZuS2">No</span></div></button></div></div><hr class="styles__divider_FiYIa"><div class="styles__title-secondary_DP22k styles__title_jlzSe">Need more help?</div><div class="styles__body-default_BZuS2 styles__grey-medium_t6xVn">Email <span class="styles__blue_CHldH"><a href="mailto:help@mercury.com" target="_blank" rel="noopener" class="styles__link_isEGW styles__no-visited-coloring_sCWRV styles__underline-onHover_aOL_i">help@mercury.com</a></span> and we’ll be happy to assist.</div></div>
                </div>
              </div>

            </article>
          </main>

        </div>
      </div>
    </div>
  </div>
</template>
