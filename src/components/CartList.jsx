function CartList({cart, removeFromCart}) {
if (cart.length === 0){
    return <div>Your cart is empty. Borrow a movie to fill it!</div>
}
return(
<div>
<ul>
{cart.map((movie) => 
<li key={movie.id}>
{movie.name}
{movie.cast}
{movie.descripition}
<button onClick={() => removeFromCart(movie.id)}>Remove</button>
</li>

)}
</ul>
</div>

)
}









export default CartList;