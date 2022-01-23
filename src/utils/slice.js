import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        currentUser: {},
        cartNotification: { isOpen: false },
        cartProducts: [],
        toast: { isOpen: false, message: '', isError: false, isSuccess: false },
        loginModal: { isOpen: false, navigateToOnSuccess: '/' }
    },
    reducers: {
        closeCartNotification: (state, action) => {
            state.cartNotification.isOpen = false
        },
        openCartNotification: (state, action) => {
            state.cartNotification.isOpen = true
        },
        addProductsToCart: (state, action) => {
            const { id = null } = action.payload
            let isAdd = false
            let existingProductIndex = -1
            if (state.cartProducts.length > 0) {
                // logic for adding products to cart only if that id is not available in the existing cartProducts store
                const cartProducts = [...state.cartProducts]
                existingProductIndex = cartProducts.findIndex(item => item.id === id)
                isAdd = existingProductIndex === -1
            } else {
                isAdd = true
            }
            if (isAdd) {
                state.cartProducts.push({ ...action.payload, qty: 1, totalPrice: action.payload.price, totalMRPPrice: action.payload.mrp })
                state.cartProducts.reverse()
            } else {
                state.cartProducts.splice(existingProductIndex, 1)
                state.cartProducts.push({ ...action.payload, qty: 1, totalPrice: action.payload.price, totalMRPPrice: action.payload.mrp })
                state.cartProducts.reverse()
            }
        },
        incrementProductQtyAndUpdatePrice: (state, action) => {
            const { id = null } = action.payload
            state.cartProducts.forEach(product => {
                if (product.id === id) {
                    product.qty += 1
                    product.totalPrice = product.qty * product.price
                    product.totalMRPPrice = product.qty * product.mrp
                }
            })
        },
        decrementProductQtyAndUpdatePrice: (state, action) => {
            const { id = null } = action.payload
            state.cartProducts.forEach(product => {
                if (product.id === id && product.qty > 1) {
                    product.qty -= 1
                    product.totalPrice = product.qty * product.price
                    product.totalMRPPrice = product.qty * product.mrp
                }
            })
        },
        updateProductQtyAndUpdatePrice: (state, action) => {
            const { id = null, value = null } = action.payload
            state.cartProducts.forEach(product => {
                if (product.id === id && product.qty > 0) {
                    product.qty = value * 1
                    product.totalPrice = product.qty * product.price
                    product.totalMRPPrice = product.qty * product.mrp
                }
            })
        },
        removeProductFromCartList: (state, action) => {
            const { id = null } = action.payload
            const index = state.cartProducts.findIndex(product => product.id === id)
            state.cartProducts.splice(index, 1)
        },
        showToastMessage: (state, action) => {
            const { message = '', isError = false, isSuccess = false } = action.payload
            state.toast.isOpen = true
            state.toast.message = message
            state.toast.isError = isError
            state.toast.isSuccess = isSuccess

        },
        hideToastMessage: (state, action) => {
            state.toast.isOpen = false
            state.toast.message = ''
            state.toast.isError = false
            state.toast.isSuccess = false
        },
        saveOrder: (state, action) => {
            state.cartProducts = []
        },
        showLoginModal: (state, action) => {
            state.loginModal.isOpen = true
            if (!!action.payload)
                state.loginModal.navigateToOnSuccess = action.payload.navigateToOnSuccess
        },
        hideLoginModal: (state, action) => {
            state.loginModal.isOpen = false
            state.loginModal.navigateToOnSuccess = null
        },
        updateCurrentUserOnLogin: (state, action) => {
            state.currentUser = action.payload
        },
        clearCurrentUserOnLogout: (state, action) => {
            state.currentUser = {}
            state.cartNotification = { isOpen: false }
            state.cartProducts = []
            state.toast = { isOpen: false, message: '', isError: false, isSuccess: false }
            state.loginModal = { isOpen: false, navigateToOnSuccess: '/' }
        }
    },
});


export const {
    closeCartNotification,
    openCartNotification,
    addProductsToCart,
    incrementProductQtyAndUpdatePrice,
    decrementProductQtyAndUpdatePrice,
    updateProductQtyAndUpdatePrice,
    removeProductFromCartList,
    showToastMessage,
    hideToastMessage,
    saveOrder,
    showLoginModal,
    hideLoginModal,
    updateCurrentUserOnLogin,
    clearCurrentUserOnLogout
} = appSlice.actions;

export default appSlice.reducer