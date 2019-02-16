<template>
  <div>
    music
    <Aplayer v-if="isReady" :music= 'musicList[0]' :list= 'musicList' :showLrc='true'/>
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer'

export default {
  data () {
    return {
      musicList:[],
      isReady:false  
    }
  },
  components: {
    Aplayer
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      axios.get('./data/musicdata.json')
      .then((res)=>{
        console.log(res.data.musicData);
        this.musicList = res.data.musicData
        this.isReady = true;
      })
    }
  }
}
</script>
<style scoped>

</style>
