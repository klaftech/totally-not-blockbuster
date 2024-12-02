import { NavItem } from "react-bootstrap";
import "../assets/css/cart.css"
function CartList({ moviesInCart, removeFromCart}) {
if ((!Array.isArray(moviesInCart)) || ((Array.isArray(moviesInCart)) && (moviesInCart.length === 0))){
    return <div className="cart">Your cart is empty. Borrow a movie to fill it!</div>
}
return(
<div>
<ul>
{moviesInCart.map((movie) => 
<li key={movie.id} className="cart-item">
<img src={movie.image} alt={movie.name} className="cart-image"></img>
<span className="cart-name">{movie.name}</span>
<button onClick={() => removeFromCart(movie)}>Remove</button>
</li>

)}
</ul>
</div>

)
}









export default CartList;