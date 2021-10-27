import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import {useEffect, useState} from "react";

function App() {
    const savedCart = sessionStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    const [isFooterShow, updateIsFooterShown] = useState(true)

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo'/>
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart}/>
                <ShoppingList cart={cart} updateCart={updateCart}/>
            </div>
            <button onClick={() => updateIsFooterShown(false)}>Cacher !</button>
            {isFooterShow && <Footer cart={cart}/>}
        </div>
    )
}

export default App