<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="add">增加</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    add(){
      this.$emit("addChildren",10)
    }
  },
}
</script>

<style scoped>

</style>
