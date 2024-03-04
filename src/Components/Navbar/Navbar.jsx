import React from 'react'
import styles from './Navbar.module.scss'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import {Link} from "react-router-dom";


const menuItems = ['Shop', 'Men', 'Women', 'Kids']

const chosePath = (index) => {
	const path = ['/', '/mens', '/womens', '/kids']
	return path[index]
}

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
					<li onClick={() => setMenu(menuItems[index])} key={index}><Link to={`${chosePath(index)}`}>{name}</Link> {menu === name ? <hr/> : ''}</li>
				))}
			</ul>

			{/* Login panel */}
			<div className={styles.navLoginCart}>
				<Link to='/login'>
					<button>Login</button>
				</Link>
				<Link to='/cart'>
					<img src={cart_icon} alt="cart icon"/>
				</Link>
				<div className={styles.navCartCount}>

				</div>
			</div>
		</div>
	)
}
