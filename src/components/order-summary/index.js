import { useNavigate } from 'react-router-dom'
import OrderPricingDetails from './order-pricing-details'
import { useGetTotalProductsInCart, useGetUserIsLoggedIn, useShowLoginModal } from '../../utils/customhooks'
import { Link } from 'react-router-dom'
import './styles.scss'

const OrderSummary = (props) => {

    let totalCartProducts = useGetTotalProductsInCart()

    const isLoggedIn = useGetUserIsLoggedIn()

    const navigate = useNavigate()

    const { dispatch, showLoginModal } = useShowLoginModal()

    const showLoginModalOrCheckoutPage = (e) => {
        if (isLoggedIn) {
            navigate('/checkout')
        } else {
            dispatch(showLoginModal({ navigateToOnSuccess: '/checkout' }))
        }
    }

    return (
        <section className="order-summary-container m-auto">
            <div className="order-details p-2">
                <div className="title fw-bolder">Order Summary : ({totalCartProducts}) Items</div>
                <OrderPricingDetails />
            </div>
            {!props.onSaveOrder && (
                <span
                    className="btn checkout-btn w-100"
                    role="button"
                    onClick={showLoginModalOrCheckoutPage}
                > Proceed to checkout </span>
            )}
            {props.onSaveOrder && <span onClick={(e) => props.onSaveOrder()} className="btn checkout-btn w-100"> Save Order </span>}
        </section >
    )
}

export default OrderSummary