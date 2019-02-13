<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>{{$store.state.count}}</h2>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store.js'
export default {
  store,
  name: 'home',
  // components: {
  //   HelloWorld
  // }
  methods: {
    timest() {
      var tmp = Date.parse( new Date() ).toString();
      tmp = tmp.substr(0,10);
      return tmp;
    },
    getReqSign(){

    }
  },
  created() {
    let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat';
    let params = {
      'app_id'     : '2111901624',
      'session'    : '10000',
      'question'   : '你叫啥',
      'time_stamp' : this.timest(),
      'nonce_str'  : Math.random().toString(36).substr(2),
      'sign'       : '',
    }
    console.log(params.short());
    
   // axios.get().then(function(res){
    //   console.log(res);
    // })
  }
}
</script>
