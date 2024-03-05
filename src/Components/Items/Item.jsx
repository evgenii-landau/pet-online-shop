import styles from './Item.module.scss'
import {Link} from "react-router-dom";


export const Item = (props) => {
	return (
		<div className={styles.item}>
			<Link to={`/product/${props.id}`}>
				<img src={props.img} alt="image"/>
			</Link>
			<p>{props.name}</p>
			<div className={styles.prices}>
				<div className={styles.priceNew}>${props.new_price}</div>
				<div className={styles.priceOld}>${props.old_price}</div>
			</div>
		</div>
	)
}
