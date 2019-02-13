<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{count}}</h2>
    <h3>{{count1}}</h3>
    <button @click="add(10)">add</button>
    <button @click="addAction">addAction</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  methods:{
    ...mapMutations(['add']),
    ...mapActions(['addAction'])
  },
   
  // methods:{
  //   add(){
  //     this.$store.commit('add',10);
  //   }
  // },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count1'])
  }
  
  // computed: mapState({
  //   computedCount:state => state.count
  // })
  // computed: {
  //  computedCount(){
  //    return this.$store.state.count
  //  } 
  // }
}
</script>
