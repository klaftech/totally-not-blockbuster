//bootstrap button theme
//usage: https://react-bootstrap.netlify.app/docs/components/buttons/
import Button from 'react-bootstrap/Button';

//fontawesome package
//https://fontawesome.com/icons/heart?s=solid
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function MovieButton({ btnVariant="light", btnDisabled=false, text, movie, onClick }) {
    
    if(text === "likes"){
        text = <div><FontAwesomeIcon color="red" icon={faHeart} /> {movie.likes}</div>
    }
    
    return (
        <Button variant={btnVariant} onClick={() => onClick(movie)} disabled={btnDisabled}>{text}</Button>
    );
}

export default MovieButton;
