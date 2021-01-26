<template>
  <div>
    <p>Блог</p>
<ul>
  <li v-for="id of 10" :key="id">
    <NuxtLink
      :to="'/blog/' + id"
      @click.prevent="openPost(id)">
      Пост {{ id }}
    </NuxtLink>
  </li>
</ul>

    <hr>

<!--    <a :href="'/blog/'+  id1">ссылка {{ id1 }}</a>-->

<!--    <a @click.native="get_breadcrumbs (id2)"-->
<!--      :href="'/blog/'+  id2">ссылка {{ id2 }}</a>-->

<!--&lt;!&ndash;    <NuxtLink to="{name: 'blog', params: { id:id2 } }">Home page</NuxtLink>&ndash;&gt;-->
<!--    <nuxt-link :to="{name: 'blog', params: { id:id3 } }">Ссылка {{ id3 }}</nuxt-link>-->
<!--    <NuxtLink-->
<!--      :to="{name: 'blog-detail', params: { id:id4 } }"-->

<!--    >Ссылка {{ id4 }}</NuxtLink>-->
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'



export default {

  methods: {
    // async fetch({store}) {
    //   await store.dispatch('test/openPost')
    // },

    ...mapActions({
      'openPost': 'test/openPost',
    })
  },




}
</script>

