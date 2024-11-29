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
  
    useEffect(()=> {
      //load movies
      fetch(`${baseUrl}/movies`)
          .then(res => res.json())
          .then(data => setMovies(data))
      
          //load active cart
      fetch(`${baseUrl}/orders/1`)
        .then(res => res.json())
        .then(data => setCart(data))
    },[])

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
    
    //factory function to generate PATCH params object
    function PatchObj(obj){
        return {
            method: "PATCH",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }
    }

    //handle borrow click: 
    //1. duplicate cart movies array, push in selected movie
    //2. PATCH request to update cart in db
    //3. update cart in state (and re-render)
    function handleBorrowButton(movie){
        const newCartMovies = [...cart.movies]
        newCartMovies.push(movie.id)
        
        const obj = PatchObj({"movies": newCartMovies})
        fetch(`${baseUrl}/orders/${cart.id}`,obj)
            .then(res => res.json())
            .then(data => {
                setCart(data)
            })
    }

    //handle like click:
    //1. PATCH request to update movie in db
    //2. update movie in state (and re-render)
    function handleLikeButton(movie){
        const obj = PatchObj({"likes": movie.likes + 1})
        fetch(`${baseUrl}/movies/${movie.id}`,obj)
            .then(res => res.json())
            .then(data => updateMovies(data))
    }





  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />} >
          <Route index element={<CarouselContainer cart={cart} setCart={setCart} movies={movies} setMovies={setMovies} onLikeButton={handleLikeButton} onBorrowButton={handleBorrowButton} />} errorElement={<ErrorPage />} />
          <Route path="/wishlist" element={<RequestFormContainer />} errorElement={<ErrorPage />} />
          <Route path="/cart" element={<CartContainer />} errorElement={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
