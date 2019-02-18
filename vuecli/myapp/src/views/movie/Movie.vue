<template>
  <div>
    <ul>
      <li class="item-list clearfix" v-for="(item,index) in dataList" :key="index" @click="goDetail(item.id)">
        <div class="list-left">
          <img :src="item.cover.url" alt="">
        </div>
        <div class="list-right">
          <h4>{{item.title}}</h4>
          <span v-for="(item,index) in item.actors" :key="index">{{item}}/</span>
          <p>{{item.year}}年</p>
        </div>
      </li>
    </ul>
    <div class="loading" v-show="!isLoading">
      <div class="loading-content">
        <img src="../../assets/img/loading.gif" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataList:[],
      listStart:0,
      isLoading:true
    }
  },
  mounted() {
    window.onscroll = () =>{
      let clientHeight = document.documentElement.clientHeight;//可视区域高度
      let scrollTop = document.documentElement.scrollTop;//当前滚动高度
      let scrollHeigth = document.documentElement.scrollHeight;//滚动条可滚动高度
      console.log(clientHeight,scrollTop,scrollHeigth)
      if(clientHeight+scrollTop>=scrollHeigth-10 && this.isLoading && this.dataList.length !=22){
        this.listStart+=10;
        this.getData()
      }
    }
  },
  created(){
    this.getData();
  },
  methods: {
    getData(){
      let proxy = 'https://bird.ioliu.cn/v2?url='
      let url = `https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=${this.listStart}&count=10`
      this.isLoading = false;
      axios.get(proxy+url)
      .then((res)=>{
        console.log(res.data.subject_collection_items);
        this.dataList = this.dataList.concat(res.data.subject_collection_items);
        this.isLoading = true;
      })
      .catch((res)=>{
        console.log('失败');
      })
    },
    goDetail(id){
      this.$router.push({name:"moviedetail",params:{movieId:id}})
    }
  },

}
</script>
<style scoped>
  .loading{
    background-color: rgba(0,0,0,.3);
    position: fixed;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
  }
  .loading-content{
    position: absolute;
    left: 50%;
    top:50%;
    margin-left: -75px;
    margin-top:-75px;
    width: 150px;
    height: 150px;
    background-color: rgba(255,255,255,.6);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul{
    padding:10px;
  }
  .item-list{
    border-bottom: 1px solid #333;
    padding: 20px 0;
  }
  .item-list .list-left{
    float: left;
    width: 40%;
    text-align: center
  }
  .item-list .list-left img{
    width: 80%;
  }
  .item-list .list-right{
    float: left;
    width: 55%;
    padding-left:5%
  }
</style>

