import styles from './RelatedProducts.module.scss'
import data from "../assets/data.js";
import {Item} from "../Items/Item.jsx";


export const RelatedProducts = () => {
	return (
		<div className={styles.relatedProduct}>
			<h1>Related Products</h1>
			<hr/>
			<div className={styles.item}>
				{data.map((item, i) => (
					<Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
				))}
			</div>
		</div>
	)
}
