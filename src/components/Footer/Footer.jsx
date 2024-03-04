import styles from './Footer.module.scss'
import footer_logo from '../assets/logo_big.png'
import instagram from '../assets/instagram_icon.png'
import pintester from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'


const footerLinks = ['Company', 'Products', 'Offices', 'About', 'Contact']
const icons = [instagram, pintester, whatsapp]

export const Footer = () => {
	return (
		<div className={styles.footer}>

			<div className={styles.footerLogo}>
				<img src={footer_logo} alt="logo"/>
				<p>ONLINE SHOP</p>
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
