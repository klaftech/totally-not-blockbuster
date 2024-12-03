import { useState } from 'react'

//bootstrap button theme
//usage: https://react-bootstrap.netlify.app/docs/components/buttons/
import Button from 'react-bootstrap/Button';

//fontawesome package
//https://fontawesome.com/icons/heart?s=solid
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function MovieButton({ btnVariant="light", btnDisabled=false, text, movie, onClick }) {
    
    const [isClicked, setClicked] = useState(false)

    function toggleColor(){
        setClicked(true)
        setTimeout(()=>setClicked(false), 1500)
    }

    if(text === "likes"){
        text = <div><FontAwesomeIcon color={(isClicked) ? "red" : "black"} icon={faHeart} /> {movie.likes}</div>
    }
    
    return (
        <Button 
            style={{"margin": "5px"}} 
            variant={btnVariant} 
            disabled={btnDisabled}
            onClick={() => {
                onClick(movie)
                toggleColor()
            }} 
        >
            {text}
        </Button>
    );
}

export default MovieButton;
