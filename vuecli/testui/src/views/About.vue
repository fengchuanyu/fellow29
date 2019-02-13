<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:"hello fellow29"
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   console.log(to);
  //   console.log(from);
  //   next();
  // },
  // beforeRouteLeave (to, from, next) {
  //   console.log(to);
  //   console.log(from);
  //   next();
  // }
}
</script>
