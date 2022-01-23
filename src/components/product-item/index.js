
import React from 'react'
import './styles.scss'

const ProductItem = (props) => {

    const { title: productTitle, ratings, totalRatings, image, mrp, price, id } = props
    const updatedMRP = mrp.toLocaleString('en-IN')
    const updatedPrice = price.toLocaleString('en-IN')

    return (
        <div className="product-item position-relative overflow-hidden">
            <div className="image mb-1">
                <img className="w-100 rounded-2" src={image} alt={productTitle} />
            </div>
            <div className="content p-3 rounded-2 overflow-hidden">
                <div className="price-section">
                    <span
                        className="actual-price rounded-3 me-4 d-inline-block fw-bold data-padding"
                    >
                        &#8377;  {updatedPrice}
                    </span>
                    <span className="mrp">MRP&nbsp;&nbsp;&nbsp;&#8377; {updatedMRP}</span>
                </div>
                <div className="product-name-section my-3">
                    <span
                        className="text-truncate d-block cursor-pointer"
                        title={productTitle}
                    >{productTitle}</span>
                </div>
                <div className="reviews-section d-flex justify-content-between">
                    <div className="rating rounded-3 data-padding">{ratings} / {totalRatings}</div>
                </div>
                {props.children}
            </div>
        </div>

    )
}

export default ProductItem