import styles from './Breadcrumb.module.scss'
import arrow from '../assets/breadcrum_arrow.png'


export const Breadcrumb = (props) => {
	const {product} = props

	return (
		<div className={styles.breadcrumb}>
			HOME <img src={arrow} alt="arrow"/> SHOP <img src={arrow} alt="arrow"/> {product.category} <img src={arrow} alt="arrow"/> {product.name}
		</div>
	)
}
