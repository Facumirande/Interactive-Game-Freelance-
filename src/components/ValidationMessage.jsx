import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import useTimer from '../helpers/Timer'; // Asegúrate de que la ruta es correcta

const ValidationMessage = ({ allValid }) => {
  const [alertShown, setAlertShown] = useState(false);
  const timerValue = useTimer(); // Obtiene el tiempo del hook

  // Convierte timerValue a segundos o minutos
  const getFormattedTime = (value) => {
    const seconds = (value * 0.001).toFixed(1);
    if (seconds < 60) {
      return `${seconds} segundos`;
    } else if (seconds === 60) {
      return `1 MINUTO`;
    } else {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = (seconds % 60).toFixed(1);
      return `${minutes} MINUTO${minutes > 1 ? 'S' : ''} ${remainingSeconds} SEGUNDOS`;
    }
  };

  const updateBestTimes = (newTime) => {
    // Obtener los mejores tiempos del localStorage
    const bestTimes = JSON.parse(localStorage.getItem('bestTimes')) || [];

    // Añadir el nuevo tiempo a la lista
    bestTimes.push(newTime);

    // Ordenar los tiempos de menor a mayor
    bestTimes.sort((a, b) => a - b);

    // Mantener solo los 5 mejores tiempos
    const top5Times = bestTimes.slice(0, 5);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('bestTimes', JSON.stringify(top5Times));
  };

  useEffect(() => {
    if (allValid && !alertShown) {
      const seconds = (timerValue * 0.001).toFixed(1);
      updateBestTimes(parseFloat(seconds)); // Actualiza los mejores tiempos con el nuevo tiempo

      Swal.fire({
        title: '¡GANASTE!',
        html: `<h1 style="color: rgb(0, 255, 47); font-size: 20px; font-family: 'Press Start 2P', cursive;">LO CONSEGUISTE EN: ${getFormattedTime(timerValue)}</h1>`,
        width: 540,
        color: "rgb(0, 0, 0)",
        background: "#000",
        backdrop: `
          rgba(0, 0, 0, 0.5)
          center top
          no-repeat
        `,
        confirmButtonColor: "rgb(0,0,0)",
        customClass: {
          title: 'custom-alert-title',
          backdrop: 'custom-alert-backdrop',
          confirmButton: 'custom-confirm-button',
          border: 'custom-alert-border'
        },
      });

      setAlertShown(true); // Marca que la alerta ya ha sido mostrada
    } else if (!allValid) {
      setAlertShown(false); // Permite mostrar la alerta de nuevo si los inputs vuelven a ser válidos
    }
  }, [allValid, alertShown, timerValue]);

  return null; // No es necesario renderizar nada en el DOM
};

ValidationMessage.propTypes = {
  allValid: PropTypes.bool.isRequired,
};

export default ValidationMessage;
