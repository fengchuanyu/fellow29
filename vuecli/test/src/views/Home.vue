<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>{{$store.state.count}}</h2>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store.js'
export default {
  store,
  name: 'home',
  // components: {
  //   HelloWorld
  // }
}
</script>
