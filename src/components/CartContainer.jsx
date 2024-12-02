import CartList from "./CartList";
import "../assets/css/cart-container.css"

function CartContainer({ moviesInCart, removeFromCart }) {  
    return(
        <div>
            <h2>Your Cart</h2>
            <CartList moviesInCart={moviesInCart} removeFromCart={removeFromCart} />
        </div>

    )
}

export default CartContainer;