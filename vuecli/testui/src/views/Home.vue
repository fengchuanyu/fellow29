<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{num}}</h1>
    <HelloWorld @addChildren="add" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      num:0
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    add(step){
      this.num+=step
    }
  }
}
</script>
