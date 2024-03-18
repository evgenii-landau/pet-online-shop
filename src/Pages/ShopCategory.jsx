import {useContext, useState, useEffect, useRef} from 'react'
import styles from './CSS/ShopCategory.module.scss'
import {ShopContext} from "../Context/ShopContext.jsx";
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import {Item} from "../Components/Items/Item.jsx";

const sortCategory = ['Price up', 'Price down']

export const ShopCategory = (props) => {
	const {all_product, sortedCategory} = useContext(ShopContext)
	const [isDropDown, setIsDropDown] = useState(false)
	const [sort, setSort] = useState('Sort by')
	const dropDownRef = useRef(null);

	const handlerSortCategory = (e, index) => {
		sortedCategory(sort)
		setSort(sortCategory[index])
		setIsDropDown(prev => !prev)
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (dropDownRef.current && !event.composedPath().includes(dropDownRef.current)) setIsDropDown(false)
		}

		document.body.addEventListener('click', handleClickOutside);

		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		};
	}, [])

	return (
		<div className={styles.shopCategory}>
			{/* Banner */}
			<img className={styles.banner} src={props.banner} alt='banner'/>

			{/* Collection */}
			<div className={styles.indexSort}>
				<p>
					<span>Showing 1-12</span> out of 36 products
				</p>
				<button className={styles.sort} onClick={() => setIsDropDown(prev => !prev)} ref={dropDownRef}>
					{sort} <img src={dropdown_icon} alt='dropdown icon'></img>
				</button>

				{/* Drop Down */}
				{isDropDown && (
					<div className={styles.dropDown}>
						<ul className={styles.dropDownList}>
							{sortCategory.map((item, i) => (
								<li key={i} className={styles.dropDownItem} onClick={(e) => handlerSortCategory(e, i)}>{item}</li>
							))}
						</ul>
					</div>
				)}
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


			{/* Explore more */}
			<button className={styles.loadMore}>
				Explore More
			</button>
		</div>
	)
}
