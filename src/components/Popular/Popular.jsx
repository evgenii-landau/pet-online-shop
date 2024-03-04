import styles from './Popular.module.scss'
import data_product from '../assets/data.js'
import {Item} from "../Items/Item.jsx";


export const Popular = () => {
	return (
		<div className={styles.popular}>
			<h1>POPULAR IN WOMEN</h1>
			<hr/>
			<div className={styles.popularItem}>
				{data_product.map((item, i) => (
					<Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
				))}
			</div>
		</div>
	)
}
