<template>

  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <div class="relative bg-gray-900">
    <div class="flex justify-between items-center px-4 py-5 sm:px-6 md:justify-start md:space-x-10">
      <div class="lg:w-0 lg:flex-1">
        <a href="/" class="flex">
          <img class="pl-2 h-18 w-auto md:h-10" src="https://signal52.ru/assets/templates/s52/images/logo.png" alt="logo">
<!--          <img class="pl-2 h-18 w-auto md:h-10" src="/logo/logo.png" alt="logo">-->
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-400 transition duration-150 ease-in-out">
          <!-- Heroicon name: menu -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">

        <NuxtLink
          @click.native="close_visibleCatalog"
          to="/"
          class="text-base leading-6 font-medium text-gray-400 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
          Главная
        </NuxtLink>
        <div class="relative">
          <!-- Item active: "text-gray-900", Item inactive: "text-gray-400" -->
          <button
            @click="change_visibleCatalog"
            type="button"
            class="group text-gray-400 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
            <span>Услуги</span>
            <!--
              Heroicon name: chevron-down
              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
            <svg class="text-gray-400 h-5 w-5 group-hover:text-gray-400 group-focus:text-gray-400 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
          <div
            v-if="visibleCatalog"
            class="z-40 absolute -ml-4 mt-3 transform w-screen max-w-md md:max-w-3xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
          >
            <div class="rounded-lg shadow-lg">
              <div class="rounded-lg shadow-xs overflow-hidden">
                <div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  <a href="#" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 hover:bg-teal-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: chart-bar -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div class="space-y-1">
                      <p class="text-base leading-6 font-medium text-gray-900">
                        Видеонаблюдение
                      </p>
                      <p class="text-sm leading-5 text-gray-400">
                        Подберите комплект либо заказите услугу мастера н адом по приобретению
                      </p>
                    </div>
                  </a>
                  <a href="#" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 hover:bg-teal-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: cursor-click -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <div class="space-y-1">
                      <p class="text-base leading-6 font-medium text-gray-900">
                        Видеодомофоны
                      </p>
                      <p class="text-sm leading-5 text-gray-400">
                        Приобретите комплектующие либо закажите комплекс оборудования под ключ
                      </p>
                    </div>
                  </a>
                  <a href="#" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 hover:bg-teal-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: shield-check -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div class="space-y-1">
                      <p class="text-base leading-6 font-medium text-gray-900">
                        Контроль доступа
                      </p>
                      <p class="text-sm leading-5 text-gray-400">
                        Консультация, доставка и пуско-наладка системы СКУД
                      </p>
                    </div>
                  </a>
                  <a href="#" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 hover:bg-teal-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: view-grid -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <div class="space-y-1">
                      <p class="text-base leading-6 font-medium text-gray-900">
                        Системы безопасности
                      </p>
                      <p class="text-sm leading-5 text-gray-400">
                        Подберите интересующую систему с доставкой и монтажем
                      </p>
                    </div>
                  </a>
                  <a href="#" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 hover:bg-teal-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: refresh -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div class="space-y-1">
                      <p class="text-base leading-6 font-medium text-gray-900">
                        Подъездный домофон
                      </p>
                      <p class="text-sm leading-5 text-gray-400">
                        Build strategic funnels that will drive your customers to convert
                      </p>
                    </div>
                  </a>
                  <a href="#" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 hover:bg-teal-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: document-report -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div class="space-y-1">
                      <p class="text-base leading-6 font-medium text-gray-900">
                        Он-лайн видеонаблюдение
                      </p>
                      <p class="text-sm leading-5 text-gray-400">
                        Get detailed reports that will help you make more informed decisions
                      </p>
                    </div>
                  </a>
                </div>
                <div class="p-5 bg-teal-800 sm:p-8 border-4 border-gray-300">
                  <a href="#" class="-m-3 p-3 flow-root space-y-1 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                    <div class="flex items-center space-x-3">
                      <div class="text-base leading-6 font-medium text-gray-900">
                        Выезд специалиста
                      </div>
                      <span class="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-teal-100 text-teal-800">
                      New
                    </span>
                    </div>
                    <p class="text-sm leading-5 text-gray-400">
                      Закажите выезд специалиста для консультации на объекте. Услуга бесплатная.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </transition>
        </div>

        <NuxtLink
          @click.native="close_visibleCatalog"
          to="/action"
          class="text-base leading-6 font-medium text-gray-400 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
          Акции
        </NuxtLink>
        <NuxtLink
          @click.native="close_visibleCatalog"
          to="/information"
          class="text-base leading-6 font-medium text-gray-400 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
          Информация
        </NuxtLink>
        <NuxtLink
          @click.native="close_visibleCatalog"
          to="/contact"
          class="text-base leading-6 font-medium text-gray-400 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
          Контакты
        </NuxtLink>
      </nav>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div v-if="false" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg">
        <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5 space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow">
              </div>
              <div class="-mr-2">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-400 transition duration-150 ease-in-out">
                  <!-- Heroicon name: x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav class="grid grid-cols-1 gap-7">
                <a href="#" class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 text-white">
                    <!-- Heroicon name: chart-bar -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Видеонаблюдение
                  </div>
                </a>
                <a href="#" class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 text-white">
                    <!-- Heroicon name: cursor-click -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Видеодомофоны
                  </div>
                </a>
                <a href="#" class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 text-white">
                    <!-- Heroicon name: shield-check -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Контроль доступа
                  </div>
                </a>
                <a href="#" class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 text-white">
                    <!-- Heroicon name: view-grid -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Видеонаблюдение для бизнеса
                  </div>
                </a>
                <a href="#" class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 text-white">
                    <!-- Heroicon name: refresh -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Подъездный домофон
                  </div>
                </a>
                <a href="#" class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-800 text-white">
                    <!-- Heroicon name: document-report -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Он-лайн видеонаблюдение
                  </div>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-4">
              <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                Pricing
              </a>
              <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                Docs
              </a>
              <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                Enterprise
              </a>
              <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                Blog
              </a>
              <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                Help Center
              </a>
              <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                Guides
              </a>
              <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                Security
              </a>
              <a href="#" class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                Events
              </a>
            </div>
            <div class="space-y-6">
            <span class="w-full flex rounded-md shadow-sm">
              <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-800 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150">
                Sign up
              </a>
            </span>
              <p class="text-center text-base leading-6 font-medium text-gray-400">
                Existing customer?
                <a href="#" class="text-teal-600 hover:text-teal-500 transition ease-in-out duration-150">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  methods: {
    ...mapActions({
      'change_visibleCatalog': 'navbar/visibleCatalog/change_visibleCatalog',
      'close_visibleCatalog': 'navbar/visibleCatalog/close_visibleCatalog',
    })
  },

  computed: {
    ...mapGetters({
      visibleCatalog: 'navbar/visibleCatalog/visibleCatalog',
    }),
  },

}
</script>

<style scoped>

</style>
