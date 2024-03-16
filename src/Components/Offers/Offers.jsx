import styles from './Offer.module.scss'
import exclusive_image from '../assets/exclusive_image.png'


export const Offers = () => {
	return (
		<div className={styles.offers}>
			{/* Left Row */}
			<div className={styles.offersLeft}>
				<h1>Exclusive</h1>
				<h1>Offers For You</h1>
				<p>ONLY ON BEST SELLERS PRODUCTS</p>
				<button className={styles.offersBtn}>Check Now</button>
			</div>
			{/* Right Row */}
			<div className={styles.offersRight}>
				<img src={exclusive_image} alt="exclusive offer"/>
			</div>
		</div>
	)
}
