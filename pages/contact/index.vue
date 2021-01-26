<template>
  <div>
    <div class="p-10 max-w-7xl mx-auto sm:px-6 lg:px-8 " style="background-image: url(https://image.jimcdn.com/app/cms/image/transf/none/path/s87bed42c60944655/backgroundarea/i522b5ac9d6eb9536/version/1518789319/image.jpg)">
      <!--    <div class="p-10 max-w-7xl mx-auto sm:px-6 lg:px-8 " style="background-image: url(https://static.vecteezy.com/system/resources/previews/000/140/572/original/lowpoly-grey-gradient-vector.png)">-->
      <div class="flex flex-col text-center w-full">
        <h1 class=" text-5xl font-medium title-font text-white">Контакты</h1>
      </div>
    </div>

    <section class="text-gray-700 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.316856807668!2d43.49272759122799!3d56.232524713157275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414e3aa04766d915%3A0xc79a7e8d55bed7e7!2z0KDQtdGH0L3QvtC1INGILiwgMywg0JTQt9C10YDQttC40L3RgdC6LCDQndC40LbQtdCz0L7RgNC-0LTRgdC60LDRjyDQvtCx0LsuLCA2MDYwMTY!5e0!3m2!1sru!2sru!4v1605109876675!5m2!1sru!2sru"
                  style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
          <div class="bg-white relative flex flex-wrap py-6">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">Адреса:</h2>
              <p class="leading-relaxed">

                г. Дзержинск, ул. Гайдара, д.72 <br>

                г. Дзержинск, ш. Речное 3В корп.1
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">Почта:</h2>
              <a class="text-indigo-500 leading-relaxed">27-dom@mail.ru </a> - Установка
              <a class="text-indigo-500 leading-relaxed">signal_dom@mail.ru</a> - Ремонт
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">Телефон:</h2>
              <p class="leading-relaxed">8 (8313) 35-07-10</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Есть вопросы или предложения?</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Ответим в течении 24 часов</p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Представьтесь</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" wfd-id="154">
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Ваша почта</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" wfd-id="153">
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Сообщение</label>
            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" wfd-id="155"></textarea>
          </div>
          <button class="text-white bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded text-lg" wfd-id="156">Отправить</button>
          <p class="text-xs text-gray-500 mt-3">Нажимая отправить вы соглашаетесь с обработкой ваших персональных данных.</p>
        </div>
      </div>
    </section>





  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>

</style>
