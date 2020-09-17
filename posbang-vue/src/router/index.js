import Vue from 'vue'
import Router from 'vue-router'
import FoodComponent from '@/components/FoodComponent'
import CategoryComponent from '@/components/CategoryComponent'
import ArticleItemComponent from '@/components/ArticleItemComponent'


Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'CategoryComponent',
    	component: CategoryComponent
    },
    {
    	path: '/foods',
    	name: 'FoodComponent',
    	component: FoodComponent
    },
    {
        path: '/ArticleItemComponent',
        name: 'ArticleItemComponent',
        component: ArticleItemComponent
    }
  ]
})
