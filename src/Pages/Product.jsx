import React from 'react'
import {ShopContext} from "../Context/ShopContext.jsx";
import {useParams} from "react-router-dom";
import {Breadcrumb} from "../Components/Breadcrumbs/Breadcrumb.jsx";
import {ProductDisplay} from "../Components/ProductDisplay/ProductDisplay.jsx";
import {DescriptionBox} from "../Components/DescriptionBox/DescriptionBox.jsx";
import {RelatedProducts} from "../Components/RelatedProducts/RelatedProducts.jsx";

export const Product = () => {
	const {all_product} = React.useContext(ShopContext)
	const {productId} = useParams()
	const product = all_product.find((e) => e.id === Number(productId))

	return (
		<div>
			<Breadcrumb product={product}/>
			<ProductDisplay product={product}/>
			<DescriptionBox/>
			<RelatedProducts/>
		</div>
	)
}
