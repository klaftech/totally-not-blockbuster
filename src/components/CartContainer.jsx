import CartList from "./CartList";
import "../assets/css/cart-container.css"

function CartContainer({ moviesInCart, removeFromCart }) {  
    return(
        <div>
            <h2 className="cart-container">Your Cart</h2>
            <CartList cart={cart} moviesInCart={moviesInCart} removeFromCart={removeFromCart} />
        </div>

    )
}

export default CartContainer;