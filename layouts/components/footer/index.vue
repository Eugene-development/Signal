<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->
  <footer class="bg-gray-900">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4 class="text-lg leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                Сайт
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Акции
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Информация
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h4 class="text-lg leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                Каталог
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    тест
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    тест
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    тест
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    тест
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4 class="text-lg leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                Сервис
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Консультация
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Обслуживание
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Гарантии
                  </a>
                </li>
                <li>
                  <a href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Ремонт
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h4 class="text-lg leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                Админ
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="http://localhost:3050/admin/login"
                     class="text-base leading-6 text-gray-300 hover:text-white">
                    Вход
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3050/admin/registration"
                     class="text-base leading-6 text-gray-300 hover:text-white">
                    Регистрация
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0">
          <h4 class="text-lg leading-5 font-semibold text-gray-400 tracking-wider uppercase">
            Коммерческое предложение
          </h4>
          <p class=" mt-4 text-base leading-6 text-gray-300">
            Отправьте свою почту и получите предложение о сотрудничестве.
          </p>

          <form class="border-t border-gray-700 p-5 mt-4 sm:flex sm:max-w-md">
            <label for="emailAddress" class="sr-only">Email address</label>
            <input type="email" id="emailAddress" required class="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base leading-6 text-gray-900 placeholder-gray-500 focus:outline-none focus:shadow-outline-gray focus:placeholder-gray-400 transition duration-150 ease-in-out" placeholder="Ваша почта">
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button type="submit" class="w-full bg-teal-800 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base leading-6 font-medium text-white hover:bg-teal-500 focus:outline-none focus:border-teal-800 focus:shadow-outline-teal active:bg-teal-500 transition duration-150 ease-in-out">
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
        <p class="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
          &copy; 2020 Все права защищены.
        </p>
      </div>
    </div>
  </footer>

</template>

<script>
export default {
}
</script>

<style scoped>

</style>
