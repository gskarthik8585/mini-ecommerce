import { useGetTotalMRPAndDiscountedPrice } from '../../utils/customhooks'

const OrderPricingDetails = (props) => {

    let { totalMRPPrice, totalDiscountedPrice } = useGetTotalMRPAndDiscountedPrice()

    let totalDiscount = totalMRPPrice - totalDiscountedPrice

    return (
        <>
            <div className="pricing total-products-container">
                <span>Total Products (Inc GST)</span><span>&#8377; {totalMRPPrice.toLocaleString('en-IN')}</span>
            </div>
            {totalDiscount > 0 && (
                <div className="pricing discount-container">
                    <span>Discount</span><span>&#8377; {totalDiscount.toLocaleString('en-IN')}</span>
                </div>
            )}
            <div className="pricing final-total-container fw-bold">
                <span>Total</span><span>&#8377; {totalDiscountedPrice.toLocaleString('en-IN')}</span>
            </div>
        </>
    )
}

export default OrderPricingDetails