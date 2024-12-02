import {useState, useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/carousel.css";
//import placeholder from '../assets/placeholder.png'
import CarouselItem from './CarouselItem';

function CarouselContainer() {
    
    const baseUrl = "http://localhost:3500"
    const [movies, setMovies] = useState()
    const [cart, setCart] = useState()

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

    //show loading if fetch promises are not yet fulfilled into state
    if(!movies) return <div>Loading Movies</div>
    if(!cart) return <div>Loading Cart</div>

    //build carousel items
    const moviesToDisplay = movies.map((movie,index) => {
        const isCarted = cart.movies.find((cartMovie) => cartMovie === movie.id);
        return (
            <CarouselItem 
                key={index} 
                isCarted={isCarted}
                movie={movie}
                onClickBorrow={handleBorrowButton} 
                onClickLike={handleLikeButton} 
            />
        )
    })


    /////////////////////////////////////////////
    // begin render carousel
    /////////////////////////////////////////////
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <Carousel 
            responsive={responsive}
            centerMode={true}
            infinite={true}
            transitionDuration={500}
            autoPlay={true}
            autoPlaySpeed={1500}
            itemClass="carousel-item-spacing"
            //className=""
            //swipeable={true}
            //draggable={false}
            //showDots={true}
            //ssr={true} // means to render carousel on server-side.
            //autoPlay={this.props.deviceType !== "mobile" ? true : false}
            //keyBoardControl={true}
            //customTransition="all .5"
            //containerClass="carousel-container"
            //containerClass={`w-full`}
            //removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            //dotListClass="custom-dot-list-style"
            //itemClass="carousel-item-padding-40-px"
        >
            {moviesToDisplay}
        </Carousel>
    );
};

export default CarouselContainer;