
import PropTypes from 'prop-types'; // Importa PropTypes
import { arrayImage } from "./inputsData.js"; // Importa arrayImage

const Inputs = (props) => {
  const { index, value, onChange, isValid } = props; // Añade isValid a las props

  return (
    <div className="row width-size">
      <div className="form-floating m-3 input-wrapper me-0 col-9" style={{ height: "8vh" }}>
        <input
          type="text"
          className={`form-control form-size ${isValid ? 'is-valid' : ''}`} // Aplica la clase is-valid si es válido
          id={`input-${index}`}
          value={value} // El valor del input se establece aquí
          onChange={onChange} // Maneja el cambio del input
        />
        <label className="custom-label" htmlFor={`input-${index}`}>INGRESE EL NOMBRE DEL DISPOSITIVO</label>
      </div>
      <div className="image-wrapper col-1">
        <img className="ms-0 img-hover" src={arrayImage[index].img} alt={arrayImage[index].nombre} style={{ height: "80px"}} />
      </div>
    </div>
  );
};

// Define PropTypes para el componente Inputs
Inputs.propTypes = {
  index: PropTypes.number.isRequired, // Valida que index sea un número y sea requerido
  value: PropTypes.string.isRequired, // Valida que value sea una cadena y sea requerida
  onChange: PropTypes.func.isRequired, // Valida que onChange sea una función y sea requerida
  isValid: PropTypes.bool.isRequired, // Valida que isValid sea un booleano y sea requerido
};

export default Inputs;
