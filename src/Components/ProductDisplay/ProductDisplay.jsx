import styles from './ProductDisplay.module.scss'
import star from '../assets/star_icon.png'
import star_dull from '../assets/star_dull_icon.png'

export const ProductDisplay = (props) => {
	const {product} = props

	return (
		<div className={styles.productDisplay}>
			{/* Display Left  */}
			<div className={styles.displayLeft}>
				<div className={styles.imgList}>
					<img src={product.image} alt="product"/>
					<img src={product.image} alt="product"/>
					<img src={product.image} alt="product"/>
					<img src={product.image} alt="product"/>
				</div>
				<div className={styles.img}>
					<img className={styles.mainImg} src={product.image} alt="product"/>
				</div>
			</div>

			{/* Display Right */}
			<div className={styles.displayRight}>
				<h1>{product.name}</h1>
				<div className={styles.rightStar}>
					<img src={star} alt="star"/>
					<img src={star} alt="star"/>
					<img src={star} alt="star"/>
					<img src={star} alt="star"/>
					<img src={star_dull} alt="star"/>
					<p>122</p>
				</div>

				{/*	Prices */}
				<div className={styles.rightPrices}>
					<div className={styles.rightOldPrice}>${product.old_price}</div>
					<div className={styles.rightNewPrice}>${product.new_price}</div>
				</div>

				{/*	Description */}
				<div className={styles.rightDescription}>
					A lightweight, usually knitted, pullover, close-fitting and with a round neckline and short sleeves, warn as
					an
					undershirt or outer garment.
				</div>

				<div className={styles.rightSize}>
					<h1>Select Size</h1>
					<div className={styles.rightSizes}>
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
						<div>XXL</div>
					</div>
				</div>
				<button>ADD TO CART</button>
				<p className={styles.rightCategory}>
					<span>Category: </span> Women, T-Shirt, Crop Top
				</p>
				<p className={styles.rightCategory}>
					<span>Tags: </span> Modern, Latest</p>
			</div>
		</div>
	)
}
