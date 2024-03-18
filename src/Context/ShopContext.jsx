import React, {createContext} from "react";
import all_product from "../Components/assets/all_product.js";


export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = React.useState(localStorage.getItem('localItems') ? JSON.parse(localStorage.getItem('localItems')) : [])


	const addToCart = (itemId, size) => {
		const productItem = {...all_product.find(item => item.id === itemId), size, count: 1}
		let actualLocalItems = localStorage.getItem('localItems') ? JSON.parse(localStorage.getItem('localItems')) : [{
			...all_product.find(item => item.id === itemId),
			size,
			count: 0
		}]
		let existingItemIndex = actualLocalItems.findIndex(obj => obj.id === itemId && obj.size === size)


		if (existingItemIndex !== -1) {
			actualLocalItems[existingItemIndex].count += 1
		} else if (actualLocalItems.some(obj => obj.id === itemId && obj.size !== size)) {
			actualLocalItems.push(productItem);
		} else {
			actualLocalItems.push(productItem)
		}

		setCartItems(actualLocalItems)
		return localStorage.setItem('localItems', JSON.stringify(actualLocalItems))
	}

	const removeFromCart = (itemId, size) => {
		let actualLocalItems = JSON.parse(localStorage.getItem('localItems'))
		const existingItemIndex = actualLocalItems.findIndex(item => item.id === itemId && item.size === size)
		console.log(existingItemIndex)
		if (actualLocalItems[existingItemIndex].count > 0) {
			actualLocalItems[existingItemIndex].count -= 1
		}
		if (actualLocalItems[existingItemIndex].count === 0) {
			actualLocalItems.splice(existingItemIndex, 1)
		}
		localStorage.setItem('localItems', JSON.stringify(actualLocalItems))
		setCartItems(actualLocalItems)
	}

	const getTotalCartAmount = () => {
		let totalAmount = 0;

		for (const item in cartItems) {
			if (cartItems[item].count > 0) {
				totalAmount += cartItems[item].new_price * cartItems[item].count
			}
		}
		return totalAmount
	}

	const getTotalCardItems = () => {
		return cartItems.length > 0 ? cartItems.length : 0
	}

	const sortedCategory = (category) => {
		switch (category) {
			case 'Price up':
				all_product.sort((a, b) => a.new_price - b.new_price)
				break
			case 'Price down':
				all_product.sort((a, b) => b.new_price - a.new_price)
				break
		}
	}

	const contextValue = {
		all_product,
		cartItems,
		addToCart,
		removeFromCart,
		getTotalCartAmount,
		getTotalCardItems,
		sortedCategory
	}
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	)
}

export default ShopContextProvider;