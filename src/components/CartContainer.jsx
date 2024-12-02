import { useState, useEffect } from 'react'

function CartContainer({ cart, moviesInCart }) {
        
    if(moviesInCart) {
        console.log("cart: cart ",moviesInCart)
    } else {
        console.log("cart: still loading cart")
    }

    //show loading if all objects are not yet in state
    if(!moviesInCart) return <div>Cart Loading...</div>
    
    console.log(moviesInCart)
    const movieNames = moviesInCart.map((movie,index) => {
        return <h2 key={index}>{movie.name}</h2>
    })

    return (
        <div style={{padding: "7%"}}>
            Under Construction
            {movieNames}
        </div>
    );
}

export default CartContainer;
