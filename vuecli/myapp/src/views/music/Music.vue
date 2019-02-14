<template>
  <div>
    <h1>音乐</h1>
  </div>
</template>
<script>
export default {
  created(){
    console.log("音乐");
    let obj = {
      title:"音乐",
      className:"music"
    }
    this.$emit("changeNav",obj)
  }
}
</script>