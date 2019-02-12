<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/mine">我的</router-link>|
      <router-link to="/test">测试</router-link>|
      <router-link :to="{name:'test1',params:{name:'zs',age:'20'}}">子路由测试1</router-link>|
      <router-link to="/test2/ls/30">子路由测试2</router-link>|
      <router-link to="/home/ww/40">返回首页</router-link>|
      <router-link to="/viewstest">别名</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
