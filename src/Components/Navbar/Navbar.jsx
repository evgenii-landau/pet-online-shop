import React from 'react'
import styles from './Navbar.module.scss'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.svg'
import close_btn from '../assets/close_btn.svg'
import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext.jsx";


const menuItems = ['Shop', 'Men', 'Women', 'Kids']

const chosePath = (index) => {
	const path = ['/pet-online-shop', '/mens', '/womens', '/kids']
	return path[index]
}

export const Navbar = () => {
	const [isOpenBurger, setIsOpenBurger] = React.useState(false)
	const {getTotalCardItems} = React.useContext(ShopContext)

	return (
		<div className={styles.navbar}>

			{/* Logo */}
			<Link className={styles.navLogo} to='/pet-online-shop'>
				<img className={styles.img} src={logo} alt="logo" width={250} height={100}/>
				<p>Inside Fashion</p>
			</Link>

			{/* Nav-Menu */}
			<ul className={styles.navMenu}>
				{menuItems.map((name, index) => (
					<li key={index}><Link className={styles.menuLink} to={`${chosePath(index)}`}>{name}</Link></li>
				))}
			</ul>

			{/* Login Panel */}
			<div className={styles.navLoginCart}>
				<Link to='/login'>
					<button className={styles.loginBtn}>Login</button>
				</Link>
				<Link to='/cart'>
					<img src={cart_icon} alt="cart icon" width={50} height={50}/>
				</Link>
				<div className={styles.navCartCount}>{getTotalCardItems()}</div>
			</div>

			<div onClick={() => setIsOpenBurger(prev => !prev)} className={styles.burger}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			{/*Menu Burger*/}
			{isOpenBurger && (
				<div className={styles.menuBurger}>
					<button onClick={() => setIsOpenBurger(prev => !prev)} className={styles.closeButton}>
						<img src={close_btn} alt="close button" width={24} height={24}/>
					</button>
					<div className={styles.wrapperBurgerLogin}>
					<Link to='/login'>
								<button className={styles.burgerLoginBtn}>Login</button>
							</Link>
							<Link to='/cart' onClick={() => setIsOpenBurger(prev => !prev)}>
								<img src={cart_icon} alt="cart icon" width={50} height={50}/>
							</Link>
							<div className={styles.navCartCountBurger}>{getTotalCardItems()}</div>
					</div>
					<ul className={styles.menuBurgerList}>
						{menuItems.map((name, index) => (
							<li key={index}><Link className={styles.burgerItem} onClick={() => setIsOpenBurger(prev => !prev)} to={`${chosePath(index)}`}>{name}</Link></li>
						))}
					</ul>
				</div>
			)}

		</div>
	)
}
