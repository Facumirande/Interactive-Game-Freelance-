import PropTypes from 'prop-types';
import Swal from 'sweetalert2'; // Asegúrate de importar SweetAlert2
// import { confetti } from '../helpers/inputsData';

const ValidationMessage = ({ allValid }) => {
  // Ejecuta Swal.fire cuando allValid es verdadero
  if (allValid) {
    Swal.fire({
      title: `¡Felicidades, ganaste!`,
      width: 540,
      color: "rgb(0, 0, 0)",
      background: "#000",
      backdrop: `
        rgba(0, 0, 0, 0)
        center top
        no-repeat
      `,
      customClass: {
        title: 'custom-alert-title', // Usa la clase personalizada para el título
        backdrop: 'custom-alert-backdrop',
        confirmButton: 'custom-confirm-button',
      },
    });
  }

  return null; // No se necesita renderizar nada en el DOM
};

ValidationMessage.propTypes = {
  allValid: PropTypes.bool.isRequired, // Recibe un booleano que indica si todos los inputs son válidos
  nivel: PropTypes.number.isRequired, // Asegúrate de que el nivel también sea recibido
};

export default ValidationMessage;
