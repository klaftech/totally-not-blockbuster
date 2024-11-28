import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/carousel.css";
import placeholder from '../assets/placeholder.png'

function CarouselSlider() {
    
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
            autoPlay={true}
            autoPlaySpeed={2000}
            itemClass="carousel-item-spacing"
            //className=""
            //swipeable={true}
            //draggable={false}
            //showDots={true}
            //ssr={true} // means to render carousel on server-side.
            //autoPlay={this.props.deviceType !== "mobile" ? true : false}
            //keyBoardControl={true}
            //customTransition="all .5"
            //transitionDuration={500}
            //containerClass="carousel-container"
            //containerClass={`w-full`}
            //removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            //dotListClass="custom-dot-list-style"
            //itemClass="carousel-item-padding-40-px"
        >
            <div>
                <img src={placeholder} />
                <br></br>
                <div className="movie-details">
                    Item 1
                    <br></br>
                    Cast here
                </div>
            </div>
            <div><img src={placeholder} /><br></br><div className="movie-details">Item 2<br></br>Cast here</div></div>
            <div><img src={placeholder} /><br></br><div className="movie-details">Item 3<br></br>Cast here</div></div>
            <div><img src={placeholder} /><br></br><div className="movie-details">Item 4<br></br>Cast here</div></div>
            <div><img src={placeholder} /><br></br><div className="movie-details">Item 5<br></br>Cast here</div></div>
            <div><img src={placeholder} /><br></br><div className="movie-details">Item 6<br></br>Cast here</div></div>
            <div><img src={placeholder} /><br></br><div className="movie-details">Item 7<br></br>Cast here</div></div>
            <div><img src={placeholder} /><br></br><div className="movie-details">Item 8<br></br>Cast here</div></div>
            <div><img src={placeholder} /><br></br><div className="movie-details">Item 9<br></br>Cast here</div></div>
            <div><img src={placeholder} /><br></br><div className="movie-details">Item 10<br></br>Cast here</div></div>
            <div><img src={placeholder} /><br></br><div className="movie-details">Item 11<br></br>Cast here</div></div>
        </Carousel>
    );
};

export default CarouselSlider;