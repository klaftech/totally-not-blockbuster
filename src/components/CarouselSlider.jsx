import {useState, useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/carousel.css";
import placeholder from '../assets/placeholder.png'
import CarouselItem from './CarouselItem';

function CarouselSlider() {
    
    const baseUrl = "http://localhost:3000"
    const [movies, setMovies] = useState()
    //console.log(movies)

    useEffect(()=> {
        fetch(`${baseUrl}/movies`)
            .then(res => res.json())
            .then(data => setMovies(data))
    },[])

    function updateMovies(specificMovie){
        const updatedMovies = movies.map((movie) => {
            if(movie.id === specificMovie.id){
                return specificMovie
            } else {
                return movie
            }
        })
        //console.log(updatedMovies)
        setMovies(updatedMovies)
    }

    function handleBorrowButton(movie){
        //TODO
        //POST to cart
        //POST available to movie
        //setState 
        console.log("borrowed")
    }

    function handleLikeButton(movie){
        const obj = {
            method: "PATCH",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"likes": movie.likes += 1})
        }
        console.log(obj)
        fetch(`${baseUrl}/movies/${movie.id}`,obj)
            .then(res => res.json())
            .then(data => updateMovies(data))
    }

    if(!movies) return <div>Loading</div>
    const moviesToDisplay = movies.map((movie,index) => {
        return (
            <CarouselItem 
                key={index} 
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

export default CarouselSlider;