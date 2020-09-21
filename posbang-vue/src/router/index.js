import Vue from 'vue'
import Router from 'vue-router'
import FoodComponent from '@/components/FoodComponent'
import CategoryComponent from '@/components/CategoryComponent'
import CartComponent from '@/components/CartComponent'


Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'CategoryComponent',
    	component: CategoryComponent
    },
    {
    	path: '/foods/:cat_id',
    	name: 'foods',
    	component: FoodComponent
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartComponent
    }
  ]
})
