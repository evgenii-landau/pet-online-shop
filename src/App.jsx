import {Navbar} from "./components/Navbar/Navbar.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Shop} from "./pages/Shop.jsx";
import {ShopCategory} from "./pages/ShopCategory.jsx";
import {Product} from "./pages/Product.jsx";
import {Cart} from "./pages/Cart.jsx";
import {LoginSignUp} from "./pages/LoginSignUp.jsx";


function App() {

	return (
		<>
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route path='/' element={<Shop/>}/>
					<Route path='/mens' element={<ShopCategory category='men'/>}></Route>
					<Route path='/womens' element={<ShopCategory category='women'/>}></Route>
					<Route path='/kids' element={<ShopCategory category='kid'/>}></Route>
					<Route path='/prduct' element={<Product/>}>
						<Route path=':productId' element={<Product/>}/>
					</Route>
					<Route path='/cart' element={<Cart/>}/>
					<Route path='/login' element={<LoginSignUp/>}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
