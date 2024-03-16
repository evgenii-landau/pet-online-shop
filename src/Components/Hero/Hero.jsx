import styles from './Hero.module.scss'
import hero from '../assets/hero_image.png'


export const Hero = () => {
	return (
		<div className={styles.hero}>

			{/* Left Right  */}
			<div className={styles.heroLeft}>
				<h2>NEW ARRIVALS ONLY</h2>
				<div>
					<div className={styles.handIcon}>
						<p>new</p>
					</div>
					<p>collection</p>
					<p>for everyone</p>
				</div>
				<button className={styles.heroLatestBtn}>
					<div>Latest Collection</div>
				</button>
			</div>

			{/* Right row */}
			<div className={styles.heroRight}>
				<img src={hero} alt="Hero"/>
			</div>
		</div>
	)
}
