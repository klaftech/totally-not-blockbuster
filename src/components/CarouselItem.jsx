import MovieButton from './MovieButton';

function CarouselItem({ movie, onClickBorrow, onClickLike }) {
    return (
        <div>
            <img src={movie.image} />
            <br></br>
            <div className="movie-details">
                {movie.name}
                <br></br>
                <MovieButton text="borrow" movie={movie} onClick={onClickBorrow} />
                <MovieButton text={movie.likes} movie={movie} onClick={onClickLike} />
                {/* <small>{movie.cast.join(', ')}</small> */}
            </div>
        </div>
    );
}

export default CarouselItem;
