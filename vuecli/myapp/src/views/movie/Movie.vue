<template>
  <div>
    <h1>电影</h1>
  </div>
</template>
<script>
export default {
  created(){
    this.getData();
  },
  methods: {
    getData(){
      let proxy = 'https://bird.ioliu.cn/v2?url='
      let url = 'https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10'
      axios.get(proxy+url)
      .then(function(res){
        console.log(res);
        
      })
      .catch(function(res){
        console.log('失败');
        
      })
    }
  },

}
</script>
