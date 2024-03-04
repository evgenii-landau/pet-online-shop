import React from 'react'
import styles from './CSS/ShopCategory.module.scss'
import {ShopContext} from "../Context/ShopContext.jsx";
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import {Item} from "../Components/Items/Item.jsx";


export const ShopCategory = (props) => {
	const {all_product} = React.useContext(ShopContext)

	return (
		<div className={styles.shopCategory}>
			{/* Banner */}
			<img className={styles.banner} src={props.banner} alt='banner'/>

			{/* Collection */}
			<div className={styles.indexSort}>
				<p>
					<span>Showing 1-12</span> out of 36 products
				</p>
				<div className={styles.sort}>
					Sort by <img src={dropdown_icon} alt='dropdown icon'></img>
				</div>
			</div>
			<div className={styles.products}>
				{all_product.map((item, i) => {
					if (props.category === item.category) {
						return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price}
									old_price={item.old_price}/>
					} else {
						return null
					}
				})}
			</div>

			{/*  */}
			<div className={styles.loadMore}>
				Explore More
			</div>
		</div>
	)
}
