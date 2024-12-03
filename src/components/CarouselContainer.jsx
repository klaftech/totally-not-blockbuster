import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/carousel.css";
import CarouselItem from './CarouselItem';

function CarouselContainer({ cart, movies, onLikeButton, onBorrowButton }) {
    
    //show loading if fetch promises are not yet fulfilled into state
    if(!movies) return <div>Loading Movies</div>
    if(!cart) return <div>Loading Cart</div>

    //build carousel items
    const moviesToDisplay = movies.map((movie,index) => {
        const isCarted = cart.items.find((cartMovie) => cartMovie.movieId === movie.id);
        return (
            <CarouselItem 
                key={index} 
                isCarted={isCarted}
                movie={movie}
                onClickBorrow={onBorrowButton} 
                onClickLike={onLikeButton} 
            />
        )
    })


    /////////////////////////////////////////////
    // begin render carousel
    /////////////////////////////////////////////
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
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