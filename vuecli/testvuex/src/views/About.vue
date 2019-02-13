<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{$store.state.count}}</h2>
    <button @click="add">add</button>
  </div>
</template>
<script>
export default {
  methods:{
    add(){
      this.$store.commit('add');
    }
  }
}
</script>
