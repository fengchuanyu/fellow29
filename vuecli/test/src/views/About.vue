<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{count}}</h1>
    <h2>{{counta}}</h2>
        <!-- <h1>{{$store.state.count}}</h1> -->
    <button @click="add(3)">增加</button>
    <button @click="addAction">异步增加</button>
  </div>
</template>
<script>
// import store from '@/store.js'
// export default {
//   store,
//   computed: {
//     countCom(){
//       return this.$store.state.count
//     }
//   }
// }
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default{
  // computed: mapState({
  //   countCom:state=>state.count
  // })
  computed:{
    ...mapState(['count']),
    ...mapGetters(['counta'])
  }, 
  methods:{
    ...mapMutations(['add']),
    ...mapActions(['addAction'])
  } 
}
</script>
