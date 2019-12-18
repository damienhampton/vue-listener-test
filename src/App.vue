<template>
  <div id="app">
    <CompA v-if="currentScreen == 'a'" :state="state"/>
    <CompB v-if="currentScreen == 'b'" :state="state"/>
    <CompC v-if="currentScreen == 'c'" :state="state"/>

    <button @click="show('a')">A</button>
    <button @click="show('b')">B</button>
    <button @click="show('c')">C</button>

    <p>State: {{ state }}</p>
  </div>
</template>

<script>
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
import DataManager from './data-manager';

export default {
  name: 'app',
  data(){
    return {
      currentScreen: null,
      dm: DataManager({
        news: {},
        sport: {}
      }),
    }
  },
  computed: {
    state(){
      return this.dm.state;
    }
  },
  components: {
    CompA,
    CompB,
    CompC
  },
  methods: {
    show(name){
      this.currentScreen = name;
      this.dm.updateTriggers(name);
    }
  },
  mounted(){
    this.dm.defineTrigger('a', [ 'news' ]),
    this.dm.defineTrigger('b', [ 'news', 'sport' ]),
    this.dm.defineTrigger('c', [])
  }
}

</script>

<style scoped>
div{
  padding: 3em;
}
</style>

