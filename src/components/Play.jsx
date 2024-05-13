import { play, playHover } from "../helpers/inputsData"
import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import FirstPage from "./FirstPage";



const Play = () => {
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <section className="play-background">
      <div className="play-button">
      <img
          src={isHovered ? playHover : play}
          alt="play"
          className="size-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{cursor: "pointer"}}
          onClick={<FirstPage/>}
          id="playButtonId"
        />
      </div>
    </section>
  )
}

Play.propTypes = {
  isPlay: PropTypes.bool.isRequired, // Valida que index sea un número y sea requerido
  handlePlay: PropTypes.isRequired// Valida que index sea un número y sea requerido
};

export default Play