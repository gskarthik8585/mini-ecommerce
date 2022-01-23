import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import OrderSummary from '../../components/order-summary'
import ProductItem from '../../components/product-item'
import { useGetCartProducts, useSaveOrder, useShowToastMessage } from '../../utils/customhooks'
import './styles.scss'

const Checkout = () => {

    const cartProducts = useGetCartProducts()
    const { saveOrder } = useSaveOrder()
    const { showToastMessage } = useShowToastMessage()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSaveOrder = () => {
        dispatch(saveOrder())
        dispatch(showToastMessage({ message: 'Order is successfully placed !', isError: false, isSuccess: true }))
        navigate('/')
    }

    return (
        <div className="">
            {
                cartProducts.length > 0 && (
                    <ul className="cart-products-container checkout m-0 p-0">
                        {
                            cartProducts.map((product, index) => {
                                return (
                                    <li className="cart-product-detail" key={`${product.title}_${index}`}>
                                        <ProductItem {...product}>
                                            <div className="d-flex flex-column flex-md-row">
                                                <div className="fw-bold">Qty: {product.qty}</div>
                                                <div className="ms-md-5 fw-bold pt-1 pt-md-0">Price: &#8377; {product.totalPrice.toLocaleString('en-IN')}</div>
                                            </div>
                                        </ProductItem>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }

            {
                cartProducts.length > 0 && (
                    <div className="">
                        <OrderSummary onSaveOrder={onSaveOrder} />
                    </div>
                )
            }

        </div>
    )
}

export default Checkout