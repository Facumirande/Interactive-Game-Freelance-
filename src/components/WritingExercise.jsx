// import Inputs from "../helpers/Inputs"
// import PropTypes from 'prop-types'; // Importa PropTypes


// const WritingExercise = (props) => {
//   const index = props.index
//   return (
//       <div className="col-6">
//       <Inputs index = {index}/>
//       </div>
//   )
  
// }
// // Define PropTypes para el componente Inputs
// WritingExercise.propTypes = {
//   index: PropTypes.number.isRequired // Valida que index sea un número y sea requerido
// };

// export default WritingExercise

import { useState } from "react";
import Inputs from "../helpers/Inputs";
import PropTypes from 'prop-types'; 
import { arrayImage } from "../helpers/inputsData";

const WritingExercise = (props) => {
  const { index } = props;
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    // Verifica si el valor ingresado coincide exactamente con uno de los nombres en `nombres`
    const validOptions = arrayImage[index].nombres.map(name => name.toLowerCase());
    setIsValid(validOptions.includes(value));
  };

  return (
    <div className="col-6">
      <Inputs
        index={index}
        value={inputValue}
        isValid={isValid}
        onChange={handleInputChange}
      />
    </div>
  );
};

WritingExercise.propTypes = {
  index: PropTypes.number.isRequired 
};

export default WritingExercise;
