import styles from './CartItems.module.scss'
import React from "react";
import {ShopContext} from "../../Context/ShopContext.jsx";
import remove from '../assets/cart_cross_icon.png'


export const CartItems = () => {
	const {cartItems, removeFromCart, getTotalCartAmount} = React.useContext(ShopContext)

	return (
		<div className={styles.cartItems}>
			<div className={styles.formatMain}>
				<p>Products</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Size</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr/>

			{/* Cart Item */}
			{cartItems.map((item, i) => {
				if (item.count > 0) {
					return (
						<div key={i}>
							<div className={`${styles.format} ${styles.formatMain}`}>
								<img className={styles.productIcon} src={item.image} alt='element image'/>
								<p>{item.name}</p>
								<p>${item.new_price}</p>
								<button className={styles.quantity} type='button'>{item.count}</button>
								<p>{item.size}</p>
								<p>${item.new_price * item.count}</p>
								<img className={styles.removeIcon} onClick={() => removeFromCart(item.id, item.size)} src={remove}
										 alt="remove icon"/>
							</div>
							<hr/>
						</div>
					)
				}
				return null
			})}

			{/* Total Section */}
			<div className={styles.down}>
				<div className={styles.total}>
					<h1>Cart Totals</h1>
					<div>
						<div className={styles.totalItem}>
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr/>
						<div className={styles.totalItem}>
							<p>Shipping Fee</p>
							<p>Free</p>
						</div>
						<hr/>
						<div className={styles.totalItem}>
							<h3>Total</h3>
							<h3>${getTotalCartAmount()}</h3>
						</div>
					</div>
					<button>PROCEED TO CHECKOUT</button>
				</div>

				{/*	Promo Code */}
				<div className={styles.promoCode}>
					<p>If you have a promo code, Enter it here</p>
					<div className={styles.promoBox}>
						<input type="text" placeholder='promo code'/>
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}
