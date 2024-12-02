import CartList from "./CartList";

function CartContainer({cart, setCart}) {
    const removeFromCart =(id) =>{
    setCart((prevCart) => prevCart.filter((movie) => movie.id !== id))
    }
    return(
        <div>
            <h2>Your Cart</h2>
            <CartList cart={cart} removeFromCart={removeFromCart} />
        </div>

    )
}










export default CartContainer;