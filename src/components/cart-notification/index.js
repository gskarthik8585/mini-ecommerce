
import cx from 'classnames'
import React from 'react';
import {
    useCloseCartNotification, useGetCartNotificationIsOpen,
    useGetLatestProductAddedToCart
} from '../../utils/customhooks'
import ProductItem from '../product-item'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

const Notification = (props) => {

    const navigate = useNavigate()

    const [state, setState] = React.useState({ isOpenLS: false, latestProductInCartLS: null })

    const { dispatch, closeCartNotification } = useCloseCartNotification()

    const isOpen = useGetCartNotificationIsOpen()

    const latestProductAddedToCart = useGetLatestProductAddedToCart()

    let displayObj = { 'd-none': !state.isOpenLS, 'd-block': state.isOpenLS }

    let selectedObj = { 'dismiss': !state.isOpenLS, 'selected': state.isOpenLS }

    const dismissNotification = () => {
        dispatch(closeCartNotification())
    }

    const goToCart = (e) => {
        dismissNotification()
        navigate('/cart')
    }

    React.useEffect(() => {
        setState((prevState) => ({
            isOpenLS: isOpen,
            latestProductInCartLS: isOpen ? latestProductAddedToCart : null
        }))

    }, [isOpen])

    return (
        <>
            <div
                className={cx('cart-notification', 'modal-backdrop', { ...displayObj })}
                onClick={(e) => dismissNotification()}
            />
            <div className={cx('cart-notification', 'container', { ...displayObj, ...selectedObj })}>
                <span
                    className="close-btn position-absolute fw-bold"
                    role="button"
                    onClick={(e) => dismissNotification()}
                >+</span>
                {
                    latestProductAddedToCart && (
                        <>
                            <div className="cart-notification-title mt-3 mb-3 fw-bolder">Product Added to Cart !</div>
                            <div className="cart-product-detail">
                                <ProductItem {...latestProductAddedToCart} />
                            </div>
                            <div className="action-btn-container d-flex justify-content-around mt-3 mt-lg-5">
                                <span
                                    className="continue-shopping-btn btn text-uppercase fw-bold"
                                    role="button"
                                    onClick={(e) => dismissNotification()}
                                >Continue Shopping</span>
                                <span
                                    role="button"
                                    className="btn gotocart-btn text-uppercase fw-bold"
                                    onClick={goToCart}
                                >Go To Cart</span>
                            </div>
                        </>
                    )
                }

            </div>
        </>
    );
}

export default Notification