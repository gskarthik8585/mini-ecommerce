
import React from 'react'
import { useDispatch } from 'react-redux'
import ProductItem from '../product-item'
import {
    useIncrementProductQtyAndUpdatePrice, useDecrementProductQtyAndUpdatePrice,
    useGetProductQtyAndPrice, useUpdateProductQtyAndUpdatePrice,
    useRemoveProductFromCartList, useShowToastMessage
} from '../../utils/customhooks'
import './styles.scss'

const ProductCart = (props) => {

    const { title, ratings, totalRatings, image, mrp, price, id, qty } = props

    const dispatch = useDispatch()
    const { decrementProductQtyAndUpdatePrice } = useDecrementProductQtyAndUpdatePrice()
    const { incrementProductQtyAndUpdatePrice } = useIncrementProductQtyAndUpdatePrice()
    const { updateProductQtyAndUpdatePrice } = useUpdateProductQtyAndUpdatePrice()
    const { removeProductFromCartList } = useRemoveProductFromCartList()
    const { showToastMessage } = useShowToastMessage()

    const productQtyAndPrice = useGetProductQtyAndPrice(id)

    const decrementQtyAndUpdatePrice = (e) => {
        dispatch(decrementProductQtyAndUpdatePrice({ id }))
    }

    const incrementQtyAndUpdatePrice = (e) => {
        dispatch(incrementProductQtyAndUpdatePrice({ id }))
    }

    const updateQtyAndUpdatePrice = (e) => {
        const value = e.target.value * 1
        if (value === 0) return
        const pat = /\d+/gi
        const isValidInt = pat.test(value)

        if (isValidInt) {
            dispatch(updateProductQtyAndUpdatePrice({ id, value }))
        }
    }

    const removeProductFromCart = () => {
        dispatch(removeProductFromCartList({ id }))
        dispatch(showToastMessage({ message: `${title} is removed from the cart`, isSuccess: true }))
    }

    return (
        <ProductItem {...props} >
            <div className="qty-container d-flex align-items-center mt-1">
                <span className="d-inline-block me-3">Qty</span>
                <button className="btn" onClick={decrementQtyAndUpdatePrice}>-</button>
                <input type="text" className="text-center" onChange={updateQtyAndUpdatePrice} value={productQtyAndPrice.qty} />
                <button className="btn" onClick={incrementQtyAndUpdatePrice}>+</button>
            </div>
            {
                productQtyAndPrice.totalPrice > 0 &&
                <div className="total-price-container fw-bold position-md-absolute">&#8377; {productQtyAndPrice.totalPrice.toLocaleString('en-IN')}</div>
            }

            <span
                className="remove-cart-item position-absolute"
                role="button"
                onClick={removeProductFromCart}
            >+</span>
        </ProductItem>

    )
}

export default ProductCart