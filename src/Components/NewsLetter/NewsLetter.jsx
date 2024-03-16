import styles from './NewsLetter.module.scss'

export const NewsLetter = () => {
	return (
		<div className={styles.newsLetter}>
			<h1>Get Exclusive Offers On Your Email</h1>
			<p>Subscribe to uor newletter and stay updated</p>
			<div>
				<input type="email" placeholder='Your Email id'/>
				<button className={styles.subscribeBtn}>Subscribe</button>
			</div>
		</div>
	)
}
