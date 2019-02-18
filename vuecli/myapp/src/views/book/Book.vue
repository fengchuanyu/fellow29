<template>
  <div>
    <swipe :speed="100" :defaultIndex="2" class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
    </swipe>
  </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  components:{
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
  created(){
    let obj = {
      title:"书籍",
      className:"book"
    }
    this.$emit("changeNav",obj)
  }
}
</script>
<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url('../../assets/img/01.jpg');
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-image: url('../../assets/img/02.jpg');
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-image: url('../../assets/img/03.jpg');
  background-color: #ff2d4b;
  color: #fff;
}
</style>
