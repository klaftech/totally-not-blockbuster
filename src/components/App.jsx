import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout'
import ErrorPage from './ErrorPage';
import CarouselContainer from './CarouselContainer';
import CartContainer from './CartContainer';
import RequestFormContainer from './RequestFormContainer';

function App() {
  
    const baseUrl = "http://localhost:3000"
    const [cart, setCart] = useState()
    const [movies, setMovies] = useState()
    const [moviesInCart, setMoviesInCart] = useState()
    
    useEffect(()=> {
      //load movies
      fetch(`${baseUrl}/movies`)
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(error => console.log('error fetching movies data: ',error))
      
      //load active cart
      fetch(`${baseUrl}/orders/1?_embed=items`)
        .then(res => res.json())
        .then(data => setCart(data))
        .catch(error => console.log('error fetching cart data: ',error))
    },[])

    useEffect(()=> {      
      //once we have cart and movies loaded, we can create object including all movies in cart
      if(cart && movies){
          const cartMoviesArray = cart.items.map((link) => {
            const movie = movies.find((element) => element.id === link.movieId)
            return {
              linkId: link.id,
              orderId: link.orderId,
              ...movie
            }
          })
          
          //convert arrayOfObjects to objectofObjects
          // const cartMovies = cartMoviesArray.reduce((result, obj) => {
          //     result[obj.id] = obj;
          //     return result;
          // }, {});
          
          setMoviesInCart(cartMoviesArray)
      }    
    },[cart,movies])
    //if(moviesInCart){console.log("app: cart ",moviesInCart)}else{console.log("app: still loading cart")}

    //set state with updated movie object
    function updateMovies(specificMovie){
        const updatedMovies = movies.map((movie) => {
            if(movie.id === specificMovie.id){
                return specificMovie
            } else {
               return movie
            }
       })
       setMovies(updatedMovies)
    }

    //set state with updated cart object, when adding cart item
    function addCartMovies(movieItem){
        const newCart = {...cart}
        newCart.items = [...cart.items,movieItem]
        setCart(newCart)
    }

    //set state with movie removed, when removing item from cart
    function removeCartMovie(movieItem){
      const newCart = {...cart}
      const tr = newCart.items.filter((movie) => movie.id !== movieItem.id)
      console.log(tr)
      //setCart(newCart)
    }

    function handleRemoveFromCart(movieObj) {
      
      //delete from db
      //remove from moviesInCart
      //remove from cart
      
      //TODO; remove from Cart as well, or move carousel loading away from cart
      const obj = CreateRequestObj("DELETE",{})
      fetch(`${baseUrl}/items/${movieObj.linkId}`,obj)
      
      const newMoviesInCart = moviesInCart.filter((movie) => movie.id !== movieObj.id)
      console.log("NMIC",newMoviesInCart)
      setMoviesInCart(newMoviesInCart)
      removeCartMovie(movieObj)
    }
    
    //factory function to generate PATCH params object
    function CreateRequestObj(method,dataObj){
        return {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataObj)
        }
    }

    //handle borrow click: 
    //1. POST request to add item link to db
    //2. duplicate moviesInCart array, push in selected movie
    function handleBorrowButton(movie){
        const obj = CreateRequestObj("POST",{"orderId": cart.id, "movieId": movie.id})
        
        fetch(`${baseUrl}/items`,obj)
            .then(res => res.json())
            .then(data => {
              addCartMovies(data)
            })
    }

    //handle like click:
    //1. PATCH request to update movie in db
    //2. update movie in state (and re-render)
    function handleLikeButton(movie){
        const obj = CreateRequestObj("PATCH",{"likes": movie.likes + 1})
        fetch(`${baseUrl}/movies/${movie.id}`,obj)
            .then(res => res.json())
            .then(data => updateMovies(data))
    }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />} >
          <Route index element={<CarouselContainer cart={cart} movies={movies} moviesInCart={moviesInCart} onLikeButton={handleLikeButton} onBorrowButton={handleBorrowButton} />} errorElement={<ErrorPage />} />
          <Route path="/wishlist" element={<RequestFormContainer />} errorElement={<ErrorPage />} />
          <Route path="/cart" element={<CartContainer cart={cart} moviesInCart={moviesInCart} removeFromCart={handleRemoveFromCart} />} errorElement={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
