import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component:()=>import('@/views/movie/Movie.vue')
    },
    {
      path: '/music',
      name: 'music',
      component:()=>import('@/views/music/Music.vue')
    },
    {
      path: '/book',
      name: 'book',
      component:()=>import('@/views/book/Book.vue')
    },
    {
      path: '/talk',
      name: 'talk',
      component:()=>import('@/views/talk/Talk.vue')
    },
    {
      path: '/moviedetail',
      name: 'moviedetail',
      component:()=>import('@/views/movie/MovieDetail.vue')
    },
    {
      path: '*',
      component:()=>import('@/views/Error.vue')
    }
  ]
})
