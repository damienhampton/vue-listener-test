<template>
  <div>
    <h1>CompA</h1>
    <p>News: {{ state.news }}</p>
  </div>
</template>

<script>
export default {
  name: 'CompA',
  props: ['state']
}
</script>

<style scoped>
div{
  background-color: green;
}
</style>
