import MovieButton from './MovieButton';

function CarouselItem({ isCarted, movie, onClickBorrow, onClickLike }) {
    let borrowBtnDisabled = false
    let borrowBtnText = "Borrow"
    let btnVariant = "success"

    if(isCarted){
        borrowBtnDisabled = true;
        borrowBtnText = "In Cart";
        btnVariant = "light";
    } else {
        if(!movie.available){
            borrowBtnDisabled = true;
            borrowBtnText = "Unavailable";
            btnVariant = "secondary"
        }
    }
    return (
        <div>
            <img src={movie.image} />
            <br></br>
            <div className="movie-details">
                <h6>{movie.name}</h6>
                <MovieButton 
                    btnVariant={btnVariant} 
                    btnDisabled={borrowBtnDisabled} 
                    text={borrowBtnText} 
                    movie={movie} 
                    onClick={onClickBorrow} 
                />
                <MovieButton 
                    btnVariant="light" 
                    btnDisabled={false} 
                    text={"likes"} 
                    movie={movie} 
                    onClick={onClickLike} 
                />
                {/* <small>{movie.cast.join(', ')}</small> */}
            </div>
        </div>
    );
}

export default CarouselItem;
