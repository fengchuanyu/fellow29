<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
    <h2>{{$store.state.count}}</h2>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store.js'
import md5 from 'js-md5';
export default {
  store,
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      num:0
    }
  },
  methods: {
    timest() {
      var tmp = Date.parse( new Date() ).toString();
      tmp = tmp.substr(0,10);
      return tmp;
    },
    keySort(params){
      let newObj = {}
      let objArr = Object.keys(params).sort();
      objArr.forEach(element => {
        newObj[element] = params[element]
      });
      return newObj
    },
    getReqSign(params,appKey){
      let thisObj = this.keySort(params);
      console.log(thisObj);
      
      let str = '';
      for(let item in thisObj){
        if(thisObj[item]!=''){
          str+=item+"="+encodeURI(thisObj[item])+"&"
        }
      }
      str+='app_key='+appKey;
      console.log(str);
      console.log(md5(str).toUpperCase());
      
      return (md5(str).toUpperCase());
    }
  },
  created() {
    let API_PROXY = 'https://bird.ioliu.cn/v2?url=';
    let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat';
    let params = {
      app_id     : '2111901624',
      session    : '10001',
      question   : '你知道我是谁吗',
      time_stamp : this.timest(),
      nonce_str  : Math.random().toString(36).substr(2),
      sign       : '',
    }
    let appKey = 'ijS7lw3tX4KmI3Kf';
    params['sign']=this.getReqSign(params,appKey);
  //  axios.get(url,{test:"123"}).then(function(res){
  //     console.log(res);
  //   })
        axios({
					url:API_PROXY+url,
					method: 'post',
          data: {...params},
        }).then(res=>{
          console.log(res);
          
        })

  }
}
</script>
