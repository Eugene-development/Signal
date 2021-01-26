<template>
  <p>
    Передано {{id}}

  </p>
</template>

<script>
export default {
name: "index",
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>

<style scoped>

</style>
