
import { useSelector, useDispatch } from 'react-redux';
import {
    openCartNotification, closeCartNotification, addProductsToCart,
    incrementProductQtyAndUpdatePrice, decrementProductQtyAndUpdatePrice,
    updateProductQtyAndUpdatePrice, removeProductFromCartList,
    showToastMessage, hideToastMessage, saveOrder, showLoginModal, hideLoginModal,
    updateCurrentUserOnLogin, clearCurrentUserOnLogout
} from '../utils/slice'

export const useOpenCartNotification = () => {
    const dispatch = useDispatch()
    return { dispatch, openCartNotification }
}

export const useCloseCartNotification = () => {
    const dispatch = useDispatch()
    return { dispatch, closeCartNotification }
}

export const useAddProductsToCart = () => {
    const dispatch = useDispatch()
    return { dispatch, addProductsToCart }
}

export const useIncrementProductQtyAndUpdatePrice = () => {
    const dispatch = useDispatch()
    return { dispatch, incrementProductQtyAndUpdatePrice }
}

export const useDecrementProductQtyAndUpdatePrice = () => {
    const dispatch = useDispatch()
    return { dispatch, decrementProductQtyAndUpdatePrice }
}

export const useRemoveProductFromCartList = () => {
    const dispatch = useDispatch()
    return { dispatch, removeProductFromCartList }
}

export const useUpdateProductQtyAndUpdatePrice = () => {
    const dispatch = useDispatch()
    return { dispatch, updateProductQtyAndUpdatePrice }
}

export const useShowToastMessage = () => {
    const dispatch = useDispatch()
    return { dispatch, showToastMessage }
}

export const useHideToastMessage = () => {
    const dispatch = useDispatch()
    return { dispatch, hideToastMessage }
}

export const useSaveOrder = () => {
    const dispatch = useDispatch()
    return { dispatch, saveOrder }
}

export const useUpdateCurrentUserOnLogin = () => {
    const dispatch = useDispatch()
    return { dispatch, updateCurrentUserOnLogin }
}

export const useClearCurrentUserOnLogout = () => {
    const dispatch = useDispatch()
    return { dispatch, clearCurrentUserOnLogout }
}

export const useShowLoginModal = () => {
    const dispatch = useDispatch()
    return { dispatch, showLoginModal }
}

export const useHideLoginModal = () => {
    const dispatch = useDispatch()
    return { dispatch, hideLoginModal }
}

export const useGetLoginModalObj = () => {
    const loginModalObj = useSelector(state => state.app.loginModal)
    return loginModalObj
}

export const useGetCartNotificationIsOpen = () => {
    const isOpen = useSelector(state => state.app.cartNotification.isOpen)
    return isOpen
}

export const useGetLatestProductAddedToCart = () => {
    const latestAddedProduct = useSelector(state => state.app.cartProducts[0])
    return latestAddedProduct
}

export const useGetTotalProductsInCart = () => {
    const totalCartProducts = useSelector(state => {
        const cartProducts = [...state.app.cartProducts]
        const cbFn = (sum, product) => {
            return sum += product.qty * 1
        }
        return cartProducts.reduce(cbFn, 0)
    })
    return totalCartProducts
}

export const useGetCartProducts = () => {
    const cartProducts = useSelector(state => state.app.cartProducts)
    return cartProducts
}

export const useGetProductQtyAndPrice = (id) => {
    const productQty = useSelector(state => {
        let qty = null
        let totalPrice = null
        state.app.cartProducts.forEach(product => {
            if (product.id === id) {
                qty = product.qty
                totalPrice = product.totalPrice
            }
        })
        return { qty, totalPrice }
    })
    return productQty
}

export const useGetTotalMRPAndDiscountedPrice = () => {
    const priceObj = useSelector(state => {
        let totalMRPPrice = 0
        let totalDiscountedPrice = 0
        state.app.cartProducts.forEach(product => {
            totalMRPPrice += product.totalMRPPrice
            totalDiscountedPrice += product.totalPrice
        })
        return { totalMRPPrice, totalDiscountedPrice }
    })
    return priceObj
}

export const useGetToastObject = () => {
    return useSelector(state => state.app.toast)
}

export const useGetUserIsLoggedIn = () => {
    const isLoggedIn = useSelector(state => {
        const loggedInUserObj = state.app.currentUser
        return Object.keys(loggedInUserObj).length > 0

    })
    return isLoggedIn
}

export const useGetloggedInUserDetails = () => {
    return useSelector(state => state.app.currentUser)
}