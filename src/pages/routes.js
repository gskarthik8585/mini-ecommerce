import Home from './home'
import Checkout from './checkout'
import Cart from './cart'


export const routes = [
    {
        path: '/',
        element: Home,
        exact: true
    },
    {
        path: '/cart',
        element: Cart,
        exact: true
    },
    {
        path: '/checkout',
        element: Checkout,
        exact: true
    }
]