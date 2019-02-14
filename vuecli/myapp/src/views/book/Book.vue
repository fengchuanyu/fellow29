<template>
  <div>
    <h1>书籍</h1>
  </div>
</template>
<script>
export default {
  created(){
    let obj = {
      title:"书籍",
      className:"book"
    }
    this.$emit("changeNav",obj)
  }
}
</script>