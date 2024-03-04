import styles from './Hero.module.scss'
import hand from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
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
						<img src={hand} alt="hand"/>
					</div>
					<p>collection</p>
					<p>for everyone</p>
				</div>
				<div className={styles.heroLatestBtn}>
					<div>Latest Collection</div>
					<img src={arrow} alt="arrow"/>
				</div>
			</div>

			{/* Right row */}
			<div className={styles.heroRight}>
				<img src={hero} alt="Hero"/>
			</div>
		</div>
	)
}
