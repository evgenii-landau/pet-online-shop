import React from 'react'
import styles from './Navbar.module.scss'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'


const menuItems = ['Shop', 'Men', 'Women', 'Kids']

export const Navbar = () => {
	const [menu, setMenu] = React.useState('Shop')

	return (
		<div className={styles.navbar}>

			{/* Logo */}
			<div className={styles.navLogo}>
				<img src={logo} alt="logo"/>
				<p>Online Shop</p>
			</div>

			{/* Nav-Menu */}
			<ul className={styles.navMenu}>
				{menuItems.map((name, index) => (
					<li onClick={() => setMenu(menuItems[index])} key={index}>{name} {menu === name ? <hr/> : ''}</li>
				))}
			</ul>

			{/* Login panel */}
			<div className={styles.navLoginCart}>
				<button>Login</button>
				<img src={cart_icon} alt="cart icon"/>
				<div className={styles.navCartCount}>

				</div>
			</div>
		</div>
	)
}
