function MovieButton({ text, movie, onClick }) {
    return (
        <button onClick={() => onClick(movie)}>{text}</button>
    );
}

export default MovieButton;
