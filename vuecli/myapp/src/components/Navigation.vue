<template>
  <div v-bind:class="activeClass">
    <header>
      <span @click="routerPush(btnList[0])">首页</span>
      <h2>{{activeTitle}}</h2>
    </header>
    
    <nav>
      <ul>
        <!-- <li>电影</li>
        <li>音乐</li>
        <li>书籍</li>
        <li>聊天</li> -->
        <li :class="{'active':item.className==activeClass}" v-for="(item,index) in btnList" :key="index" @click="routerPush(item)">{{item.name}}</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTitle:'电影',
      activeClass:"movie",
      btnList:[
        {
          name:"电影",
          routerPath:"/",
          className:'movie'
        },
        {
          name:"音乐",
          routerPath:"/music",
          className:'music'
        },
        {
          name:"书籍",
          routerPath:"/book",
          className:'book'
        },
        {
          name:"聊天",
          routerPath:"/talk",
          className:'talk'
        }
      ]
    }
  },
  props: ['navVal'],
  methods: {
    routerPush(obj){
      this.activeClass = obj.className;
      this.activeTitle = obj.name;
      this.$router.push(obj.routerPath);
    }
  },
  computed: {
    propsVal(){
      // this.activeClass = this.navVal.className;
      // this.activeTitle = this.navVal.title
      return this.navVal.title
    }
  },
  watch: {
    propsVal(){
      this.activeClass = this.navVal.className;
      this.activeTitle = this.navVal.title
    }
  },
  // computed: {
  //   propsVal(){
  //     return this.navVal.title
  //   }
  // },
  // watch: {
  //   propsVal(val){
  //     console.log(val);
  //     this.activeClass = this.navVal.className;
  //     this.activeTitle = this.navVal.title
  //   }
  // },
}
</script>
<style scoped>
  
  header,nav{
    color: #fff;
    position: fixed;
    width: 100%;
    height: 1rem;
    background-color:rgb(33, 150, 243);
    text-align: center;
  }
  .movie header,.movie nav{
    background-color: rgb(33, 150, 243);
  }
  .music header,.music nav{
    background-color: rgb(0, 150, 136);
  }
  .book header,.book nav{
    background-color: rgb(121, 85, 72);
  }
  .talk header,.talk nav{
    background-color: rgb(63, 81, 181);
  }
  header{
    top:0
  }
  header span{
    position: absolute;
    left: 10px;
    top:50%;
    transform: translateY(-50%);
  }
  nav{
    bottom: 0;
  }
  nav ul{
    width: 100%;
  }
  nav li{
    color: #ddd;
    float: left;
    width: 25%;
    height: 1rem;
    line-height: 1rem
  }
  nav li.active{
    color: #fff;
    font-weight: bolder;
    font-size: 16px
  }
</style>
