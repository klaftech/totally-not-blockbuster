function CartList({ moviesInCart, removeFromCart}) {
if (!moviesInCart){
    return <div>Your cart is empty. Borrow a movie to fill it!</div>
}
return(
<div>
<ul>
{moviesInCart.map((movie) => 
<li key={movie.id}>
{movie.name}
{movie.cast}
{movie.descripition}
<button onClick={() => removeFromCart(movie)}>Remove</button>
</li>

)}
</ul>
</div>

)
}









export default CartList;