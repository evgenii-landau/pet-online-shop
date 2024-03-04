import styles from './Item.module.scss'


export const Item = (props) => {
	return (
		<div className={styles.item}>
			<img src={props.img} alt="image"/>
			<p>{props.name}</p>
			<div className={styles.prices}>
				<div className={styles.priceNew}>${props.new_price}</div>
				<div className={styles.priceOld}>${props.old_price}</div>
			</div>
		</div>
	)
}
