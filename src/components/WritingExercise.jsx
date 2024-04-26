import Inputs from "../helpers/Inputs"
import PropTypes from 'prop-types'; // Importa PropTypes


const WritingExercise = (props) => {
  const index = props.index
  return (
      <div className="col-6">
      <Inputs index = {index}/>
      </div>
  )
  
}
// Define PropTypes para el componente Inputs
WritingExercise.propTypes = {
  index: PropTypes.number.isRequired // Valida que index sea un número y sea requerido
};

export default WritingExercise