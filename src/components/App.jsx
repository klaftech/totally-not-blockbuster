import { useState, useEffect } from 'react'
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout'
import ErrorPage from './ErrorPage';
import CarouselContainer from './CarouselContainer';
import CartContainer from './CartContainer';
import RequestFormContainer from './RequestFormContainer';
import dbLocal from '../../db.json'

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
      .catch(error => {
        console.log('error fetching movies data: ',error)
        console.log('setting movies using static db')
        setMovies(dbLocal.movies)
      })
    
    //load active cart
    fetch(`${baseUrl}/orders/1?_embed=items`)
      .then(res => res.json())
      .then(data => {
        setCart(data)
      })
      .catch(error => {
        console.log('error fetching cart data: ',error)
        console.log('setting cart using static db')

        const cart = [...dbLocal.orders]
        const items = [...dbLocal.items]
        const cartId = cart[0].id
        const filteredItems = items.filter((item) => item.orderId === cartId)
        cart[0].items = filteredItems
        setCart(...cart)
      })
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
      setMoviesInCart(cartMoviesArray)
    }    
  },[cart,movies])
  
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
  function addCartMovieItem(movieItem){
    const newCart = {...cart}
    newCart.items = [...cart.items,movieItem]
    setCart(newCart)
  }

  //set state with movie removed, when removing item from cart
  function removeCartMovieItem(movieItem){
    //update moviesInCart
    const newMoviesInCart = moviesInCart.filter((movie) => movie.id !== movieItem.id)
    setMoviesInCart(newMoviesInCart)

    //update cart
    const newCart = {...cart}
    const moviesArray = cart.items.filter((link) => link.movieId !== movieItem.id)
    newCart.items = moviesArray
    setCart(newCart)
  }

  function handleRemoveFromCart(movieObj) {
    //delete from db
    const obj = CreateRequestObj("DELETE",{})
    fetch(`${baseUrl}/items/${movieObj.linkId}`,obj)
    
    //remove from cart
    removeCartMovieItem(movieObj)
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
      .then(data => addCartMovieItem(data))
      .catch(error => {
        console.log('error saving data: ',error)
        console.log('setting cart using static db')
        addCartMovieItem(movie)
      })
  }

  //handle like click:
  //1. PATCH request to update movie in db
  //2. update movie in state (and re-render)
  function handleLikeButton(movie){
    const obj = CreateRequestObj("PATCH",{"likes": movie.likes += 1})
    fetch(`${baseUrl}/movies/${movie.id}`,obj)
      .then(res => res.json())
      .then(data => updateMovies(data))
      .catch(error => {
        console.log('error saving data: ',error)
        console.log('setting cart using static db')
        updateMovies(movie)
      })
  }

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { 
          index: true,
          element: <CarouselContainer cart={cart} movies={movies} moviesInCart={moviesInCart} onLikeButton={handleLikeButton} onBorrowButton={handleBorrowButton} />
        },
        {
          path: "wishlist",
          element: <RequestFormContainer />
        },
        {
          path: "cart",
          element: <CartContainer cart={cart} moviesInCart={moviesInCart} removeFromCart={handleRemoveFromCart} />
        },
        {
          path: "*",
          element: <Navigate replace to="/" />
        }
      ]
    }
  ], {basename: "/totally-not-blockbuster"});

  return (
    <RouterProvider router={router} />
    // <CarouselContainer cart={cart} movies={movies} moviesInCart={moviesInCart} onLikeButton={handleLikeButton} onBorrowButton={handleBorrowButton} />
  )
}

export default App