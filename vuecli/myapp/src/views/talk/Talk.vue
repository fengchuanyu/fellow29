<template>
  <div>
    <h1>聊天</h1>
  </div>
</template>
<script>
export default {
  created(){
    let obj = {
      title:"聊天",
      className:"talk"
    }
    this.$emit("changeNav",obj)
  }
}
</script>