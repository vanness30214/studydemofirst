import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo1 from '@/page/demo1/vue'
import demo2 from '@/page/demo2/index'
import demo3 from '@/page/demo3/index'
import demo4 from '@/page/demo4/index'
import demo5 from '@/page/demo5/index'
import demo6 from '@/page/demo6/index'
import demo7 from '@/page/demo7/index'
import demo8 from '@/page/demo8/index'
import demo9 from '@/page/demo9/index'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },{
      path: '/demo2',
      name: 'demo2',
      component: demo2
    }
    ,{
      path: '/demo3',
      name: 'demo3',
      component: demo3
    },{
      path: '/demo4',
      name: 'demo4',
      component: demo4
    },{
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },{
      path: '/demo6',
      name: 'demo6',
      component: demo6
    },{
      path: '/demo7',
      name: 'demo7',
      component: demo7
    },{
      path: '/demo8',
      name: 'demo8',
      component: demo8
    },{
      path: '/demo9',
      name: 'demo9',
      component: demo9
    }
  ]
})
