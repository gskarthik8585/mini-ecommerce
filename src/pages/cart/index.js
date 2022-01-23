
import { Link } from 'react-router-dom'
import OrderSummary from '../../components/order-summary'
import ProductCart from '../../components/product-cart'
import { useGetCartProducts } from '../../utils/customhooks'
import './styles.scss'

const Cart = () => {

    const cartProducts = useGetCartProducts()

    return (
        <div className="row">
            {
                cartProducts.length > 0 && (
                    <ul className="cart-products-container col-lg-7">
                        {
                            cartProducts.map((product, index) => {
                                return (
                                    <li className="cart-product-detail" key={`${product.title}_${index}`}>
                                        <ProductCart {...product} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }

            {
                cartProducts.length === 0 && (
                    <div className="empty-cart-message m-auto text-center">
                        <div className="title">Missing Cart Items ?</div>
                        <Link role="button" className="btn my-4" to={'/'}>Continue Shopping</Link>
                    </div>
                )
            }

            {
                cartProducts.length > 0 && (
                    <div className="col-lg-5">
                        <OrderSummary />
                    </div>
                )
            }

        </div>
    )
}

export default Cart