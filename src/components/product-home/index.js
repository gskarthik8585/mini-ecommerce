
import React from 'react'
import { useDispatch } from 'react-redux'
import ProductItem from '../product-item'
import { useOpenCartNotification, useAddProductsToCart } from '../../utils/customhooks'
import './styles.scss'

const ProductHome = (props) => {

    const { title, ratings, totalRatings, image, mrp, price, id } = props

    const [state, setState] = React.useState({ isAdding: false, isAdded: false })

    const dispatch = useDispatch()

    const { openCartNotification } = useOpenCartNotification()
    const { addProductsToCart } = useAddProductsToCart()

    const addToCart = () => {
        setState((prevState) => ({ ...prevState, isAdding: true }))
    }

    React.useEffect(() => {
        if (state.isAdding) {
            setTimeout(() => {
                setState((prevState) => ({ ...prevState, isAdded: true, isAdding: false }))
            }, 1500)
        }
    }, [state.isAdding])

    React.useEffect(() => {
        if (state.isAdded) {
            dispatch(addProductsToCart({ title, ratings, totalRatings, image, mrp, price, id }))
            dispatch(openCartNotification())
            setTimeout(() => {
                setState((prevState) => ({ ...prevState, isAdded: false, isAdding: false }))
            }, 1500)
        }
    }, [state.isAdded, dispatch, openCartNotification])

    return (
        <ProductItem {...props} >
            <div
                className="add-to-cart product-home rounded-3 data-padding fw-bold position-absolute"
                role="button"
                onClick={addToCart}
            >
                {state.isAdding && <span>Adding to Cart ...</span>}
                {state.isAdded && <span>Added to Cart !</span>}
                {!state.isAdding && !state.isAdded && <span>Add to Cart</span>}
            </div>
        </ProductItem>

    )
}

export default ProductHome