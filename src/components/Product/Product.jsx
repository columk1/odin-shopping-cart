import styles from './Product.module.css'
import { useParams, useOutletContext, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Product = () => {
  // const { product } = useLoaderData()
  const { products, cartItems, setCartItems } = useOutletContext()
  const [quantity, setQuantity] = useState(1)

  const id = useParams().productId
  const product = products.find((product) => product.id == id)

  let navigate = useNavigate()

  const addToCart = (e) => {
    e.preventDefault()
    updateCart()
    navigate('/cart')
  }

  const updateCart = () => {
    let newCartItem = { ...product, quantity: quantity }
    if (cartItems.find((item) => item.id === newCartItem.id)) {
      let newCartItems = cartItems.map((item) => {
        return item.id === newCartItem.id
          ? { ...item, quantity: item.quantity + newCartItem.quantity }
          : item
      })
      setCartItems(newCartItems)
    } else {
      setCartItems([...cartItems, newCartItem])
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.productImg}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.productInfo}>
        <h2>{product.title}</h2>
        <div className={styles.price}>${product.price}</div>
        <p className={styles.description}>{product.description}</p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor='quantity'>Quantity</label>
            <input
              type='number'
              id='quantity'
              name='quantity'
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            ></input>
          </div>
          <button className={styles.btn} type='submit' onClick={addToCart}>
            Add to cart
          </button>
        </form>
      </div>
    </div>
  )
}

export default Product
