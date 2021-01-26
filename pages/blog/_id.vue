<template>
  <div>
    <p>Тестовый пост</p>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   }
  // },


// Инициализация серверного рендеринга. Без этой строки Данные показываются из конечного стэйта, но для поисковиков видны из начального
  async fetch({store}) {
    await store.dispatch('test/getPost')
  },


  computed: {
    ...mapGetters({
      data: 'test/data',
    }),
  },

//  mounted??? В нём mapAction который отдаёт команду в стор забрать конкретный экземпляр и вернуть геттером
}
</script>

<style scoped>

</style>
