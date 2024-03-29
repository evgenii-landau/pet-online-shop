import styles from './Footer.module.scss'
import logo from '../assets/logo.png'
import instagram from '../assets/instagram_icon.png'
import pintester from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'


const footerLinks = ['Company', 'Products', 'Offices', 'About', 'Contact']
const icons = [instagram, pintester, whatsapp]

export const Footer = () => {
	return (
		<div className={styles.footer}>

			<div className={styles.footerLogo}>
				<img className={styles.img} src={logo} alt="logo" width={250} height={100}/>
				<p>INSIDE FASHION</p>
			</div>

			<ul className={styles.links}>
				{footerLinks.map((link, i) => (
					<li key={i}>{link}</li>
				))}
			</ul>

			<div className={styles.socialIcon}>
				{icons.map((icon, i) => (
					<div key={i} className={styles.iconsContainer}>
						<img src={icon} alt='icon'/>
					</div>
				))}
			</div>

			<div className={styles.copyright}>
				<hr/>
				<p>Copyright @ 2024 - All Right Reserved</p>
			</div>
		</div>
	)
}
