<template>
  <div>
    <h1>CompB</h1>
    <p>News: {{ state.news }}</p>
    <p>Sport: {{ state.sport }}</p>
  </div>
</template>

<script>
export default {
  name: 'CompB',
  props: ['state']
}
</script>

<style scoped>
div{
  background-color: red;
}
</style>
