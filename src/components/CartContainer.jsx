import CartList from "./CartList";
import "../assets/css/cart-container.css"
function CartContainer({ cart, moviesInCart, removeFromCart }) {
//function CartContainer({cart, setCart}) {
  
    // function setCart(){
    //   console.log("function failed, pending logic rewrite")
    // }
  
    // const removeFromCart =(id) =>{
    // setCart((prevCart) => prevCart.filter((movie) => movie.id !== id))
    // }

function CartContainer({ moviesInCart, removeFromCart }) {  
    return(
        <div>
            <h2>Your Cart</h2>
            <CartList moviesInCart={moviesInCart} removeFromCart={removeFromCart} />
        </div>

    )
}

export default CartContainer;