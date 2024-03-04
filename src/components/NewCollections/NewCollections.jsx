import styles from './NewCollection.module.scss'
import new_collections from "../assets/new_collections.js";
import {Item} from "../Items/Item.jsx";


export const NewCollections = () => {
	return (
		<div className={styles.newCollections}>
			<h1>NEW COLLECTIONS</h1>
			<hr/>
			<div className={styles.collections}>
				{new_collections.map((item, i) => (
					<Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
				))}
			</div>
		</div>
	)
}
