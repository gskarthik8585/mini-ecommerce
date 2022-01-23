
import { categories } from '../../mockresponse'
import ProductHome from '../../components/product-home'
import Notification from '../../components/cart-notification'
import './styles.scss'

const Home = () => {
   return (
      <section className="home">
         {
            categories.length > 0 && categories.map((category, categoryIndex) => {
               const { title: categoryTitle = null, description = null, products = [] } = category
               return (
                  <div className="category-container mt-5" key={`${categoryTitle}_${categoryIndex}`}>
                     {description && <div className="description">{description}</div>}
                     {categoryTitle && <div className="title fw-bolder">{categoryTitle}</div>}
                     {
                        products.length > 0 && (
                           <ul className="product-container row flex-wrap p-0 m-0">
                              {
                                 products.map((product, productIndex) => {
                                    return (
                                       <li className="p-0" key={`${product.title}_${productIndex}`}>
                                          <ProductHome {...product} />
                                       </li>
                                    )
                                 })
                              }
                           </ul>
                        )
                     }
                  </div>
               )
            })
         }
         <Notification />
      </section>
   )
}

export default Home