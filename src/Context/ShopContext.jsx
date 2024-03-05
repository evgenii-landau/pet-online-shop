import React, {createContext} from "react";
import all_product from "../Components/assets/all_product.js";


export const ShopContext = createContext(null)

const getDefaultCart = () => {
	let cart = {}
	for (let i = 0; i < all_product.length + 1; i++) {
		cart[i] = 0
	}
	return cart
}

const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = React.useState(getDefaultCart())

	const addToCart = (itemId) => {
		setCartItems((prev) => (
			{
				...prev,
				[itemId]: prev[itemId] + 1
			}
		))

		if (!localStorage.getItem('localItems')) {
			localStorage.setItem('localItems', JSON.stringify([{...all_product[itemId - 1], count: 1}]))
		} else {
			let localItems = JSON.parse(localStorage.getItem('localItems'))

			const obj = localItems.find(item => item.id === itemId)

			if (obj) {
				localItems.map(item => {
					if (item.id === itemId) {
						item.count += 1
						localStorage.setItem('localItems', JSON.stringify(localItems))
					}
				})
			} else {
				localItems = [...localItems, {...all_product[itemId - 1], count: 1}]
				localStorage.setItem('localItems', JSON.stringify(localItems))
			}

			// localItems.find(item => {
			// 	if (item.id === itemId) {
			// 		localItems.map(item => {
			// 			item.count += 1
			// 			localStorage.setItem('localItems', JSON.stringify(localItems))
			// 			flag = true
			// 		})
			// 	}
			// 	if (flag === false) {
			// 		localItems = [...localItems, {...all_product[item - 1], count: 1}]
			// 		localStorage.setItem('localItems', JSON.stringify(localItems))
			// 	}
			// })


			// if (JSON.parse(localStorage.getItem('localItems')).find(item => item.id === itemId)) {
			// 	let localItems = JSON.parse(localStorage.getItem('localItems'))
			// 	localItems.map(item => {
			// 		console.log(item[itemId])
			// 		item.count += 1
			// 		localStorage.setItem('localItems', JSON.stringify(localItems))
			// 	})
			// } else {
			// 	let localItems = JSON.parse(localStorage.getItem('localItems'))
			// 	localItems = [...localItems, {...all_product[itemId - 1], count: 1}]
			// 	localStorage.setItem('localItems', JSON.stringify(localItems))
			// }
		}
	}

	const removeFromCart = (itemId) => {
		setCartItems((prev) => (
			{
				...prev,
				[itemId]: prev[itemId] - 1
			}
		))

		let localItems = JSON.parse(localStorage.getItem('localItems'))
		let obj = localItems.find(item => item.id === itemId)

		if (obj.count > 0) {
			localItems.map(item => {
				if (item.id === itemId) {
					if (item.count > 0) {
						item.count -= 1
					}
				}
			})
		}
		if (obj.count === 0 ) {
			localItems = localItems.filter(item => item.id !== itemId)
		}

		localStorage.setItem('localItems', JSON.stringify(localItems))
	}

	const getTotalCartAmount = () => {
		let totalAmount = 0;

		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = all_product.find((product) => product.id === Number(item))
				totalAmount += itemInfo.new_price * cartItems[item]
			}
		}
		return totalAmount
	}

	const getTotalCardItems = () => {
		let totalItems = 0

		// for (const item in cartItems) {
		// 	if (cartItems[item] > 0) {
		// 		totalItems += cartItems[item]
		// 	}
		// }
		// return totalItems
		if (localStorage.getItem('localItems')) {
			totalItems = JSON.parse(localStorage.getItem('localItems')).length
		}

		return totalItems
	}

	const contextValue = {
		all_product,
		cartItems,
		addToCart,
		removeFromCart,
		getTotalCartAmount,
		getTotalCardItems,
	}
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	)

}

export default ShopContextProvider;