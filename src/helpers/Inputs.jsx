import { arrayImage } from "./inputsData.js";
import PropTypes from 'prop-types'; // Importa PropTypes

const Inputs = (props) => {
  const index = props.index;
  return (
        <div className="row width-size">
          <div className="form-floating m-3 input-wrapper me-0 col-9" style={{height: "8vh"}} >
            <input type="text" className="form-control form-size" id={index}/>
            <label className="custom-label" htmlFor={index}>Ingrese nombre del dispositivo</label>
          </div>
          <div className="image-wrapper col-1">
            <img className="ms-0" src={arrayImage[index].img} alt={"asd"} style={{height: "80px"}}/>
          </div>
        </div>

  );
};

// Define PropTypes para el componente Inputs
  Inputs.propTypes = {
  index: PropTypes.number.isRequired // Valida que index sea un número y sea requerido
};


export default Inputs;
