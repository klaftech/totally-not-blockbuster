import { useState, useEffect } from 'react'
import Header from './Header'

function CartContainer() {
    
    //show be passed in props from app if i can get router to not be at top level
    const baseUrl = "http://localhost:3000"
    const [cart, setCart] = useState()
    const [cartMovies, setCartMovies] = useState()
    const [movies, setMovies] = useState()
    
    //load active cart
    useEffect(()=> {
        //load active cart
        fetch(`${baseUrl}/orders/1`)
            .then(res => res.json())
            .then(data => setCart(data))
        
        //load all movies
        fetch(`${baseUrl}/movies`)
            .then(res => res.json())
            .then(data => setMovies(data))
    },[])

    useEffect(()=> {
        //once we have cart and movies loaded, we can create object including all movies in cart
        if(cart && movies){
            const cartMoviesArray = movies.filter((movie) => {
                const found = cart.movies.find((element) => element === movie.id)
                if (found) {
                    return true
                } else {
                    return false
                }
            })
            
            //convert arrayOfObjects to objectofObjects
            // const cartMovies = cartMoviesArray.reduce((result, obj) => {
            //     result[obj.id] = obj;
            //     return result;
            // }, {});
            
            setCartMovies(cartMoviesArray)
        }    
    },[cart,movies])

    
    //show loading if all objects are not yet in state
    if(!cartMovies) return <div>Cart Loading...</div>
    
    console.log(cartMovies)
    const movieNames = cartMovies.map((movie,index) => {
        return <h2 key={index}>{movie.name}</h2>
    })

    return (
        <>
            <Header />
            <div style={{padding: "7%"}}>
                Under Construction
                {movieNames}
            </div>
        </>
    );
}

export default CartContainer;
