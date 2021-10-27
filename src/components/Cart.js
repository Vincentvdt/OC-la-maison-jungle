import {useEffect, useState} from 'react'
import '../styles/Cart.css'

function Cart({cart, updateCart}) {

    const [isOpen, setIsOpen] = useState(true)
    const items = Object.keys(cart)
    const total = items.reduce(
        (acc, item) => acc + cart[item].amount * cart[item].price,
        0
    )

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            {cart.map((plant, index) => (

                <div key={`${plant.name}-${index}`}>
                    {plant.name} {plant.price}€ x {plant.amount}
                </div>
            ))}
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart