function CartList({moviesInCart, removeFromCart}) {
console.log("SSS",Array.isArray(moviesInCart))

    if ((!Array.isArray(moviesInCart)) || ((Array.isArray(moviesInCart)) && (moviesInCart.length === 0))){
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