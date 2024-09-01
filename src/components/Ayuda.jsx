import { useState, useRef } from 'react';
import WritingExercise from './WritingExercise'; // Ajusta la ruta según tu estructura de carpetas
import ValidationMessage from './ValidationMessage'; // Importa el componente de validación
import Swal from 'sweetalert2'; // Importa SweetAlert2
import TimerComponent from './Timer'; // Asegúrate de que la ruta es correcta
import useTimer from '../helpers/Timer'; // Importa el hook useTimer

const helpContent = {
  TECLADO: "El teclado es el dispositivo de entrada que permite al usuario introducir texto y comandos en el ordenador.",
  MOUSE: "El ratón es un dispositivo señalador que se utiliza para interactuar con la interfaz gráfica de usuario.",
  MONITOR: "El monitor es el dispositivo de salida que muestra la información visual generada por el ordenador.",
  GABINETE: "El gabinete es la carcasa que alberga y protege los componentes internos del ordenador, como la placa base y el disco duro.",
  PARLANTE: "Los parlantes son dispositivos de salida que permiten escuchar el sonido generado por el ordenador.",
  CAMARA: "La cámara web es un dispositivo de entrada que captura imágenes y videos en tiempo real.",
  ESTABILIZADOR: "El estabilizador es un dispositivo que regula y protege el flujo de electricidad hacia el ordenador.",
  MÓDEM: "El módem es un dispositivo que conecta el ordenador a Internet o a una red externa."
};

const FirstPage = () => {
  const inputCount = 8; // Número total de inputs
  const [validStates, setValidStates] = useState(new Array(inputCount).fill(false));
  const { milliseconds, stopTimer, resetTimer } = useTimer(); // Añade resetTimer
  const inputRefs = useRef([]); // Creamos un ref para los inputs

  // Maneja el estado de validez de un input específico
  const handleValidStateChange = (index, isValid) => {
    const updatedValidStates = [...validStates];
    updatedValidStates[index] = isValid;
    setValidStates(updatedValidStates);
  };

  // Verifica si todos los inputs son válidos
  const allValid = validStates.every(valid => valid);

  // Muestra el mensaje de ayuda con SweetAlert2
  const handleHelpClick = () => {
    Swal.fire({
      title: 'Ayuda con las Partes de la Computadora',
      html: `
        <ul>
          ${Object.entries(helpContent).map(([key, description]) => (
            `<li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${description}</li>`
          )).join('')}
        </ul>
      `,
      confirmButtonText: 'Cerrar'
    });
  };

  // Muestra los mejores tiempos en un popup
  const showBestTimes = () => {
    const bestTimes = JSON.parse(localStorage.getItem('bestTimes')) || [];
    const timesMessage = bestTimes.length > 0
      ? `<ol>${bestTimes.map(time => `<li>${time} SEGUNDOS</li>`).join('')}</ol>`
      : '<p>No hay tiempos registrados.</p>';

    Swal.fire({
      title: 'Mejores Tiempos',
      html: `<h1 style="color: rgb(0, 255, 47); font-size: 20px; font-family: 'Press Start 2P', cursive;">${timesMessage}</h1>`,
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
  };

  // Reinicia el juego
  const handleResetClick = () => {
    setValidStates(new Array(inputCount).fill(false)); // Reinicia los estados de validez
    localStorage.removeItem('bestTimes'); // Limpia el local storage
    resetTimer(); // Reinicia el temporizador
    inputRefs.current.forEach(input => input.value = ""); // Limpia los inputs
  };

  return (
    <article className="game-background">
      <div className="inputs-style input-margin row">
        <h1 className="title">ESCRIBE EL NOMBRE DE CADA COMPONENTE:</h1>   
        {Array.from({ length: inputCount }, (_, index) => (
          <WritingExercise 
            key={index} 
            index={index} 
            onValidStateChange={(isValid) => handleValidStateChange(index, isValid)} 
            inputRef={el => inputRefs.current[index] = el} // Guardamos la referencia de cada input
          />
        ))}
        <ValidationMessage
          allValid={allValid} 
          stopTimer={stopTimer} 
          milliseconds={milliseconds}
        />
        <div className="buttonsPosition">
          <h1 className="btn resetButton" onClick={handleResetClick}>REINICIAR</h1>
          <h1 className="btn ayudaButton" onClick={handleHelpClick}>AYUDA</h1>
          <h1 className="btn ayudaButton" onClick={showBestTimes}>MEJORES TIEMPOS</h1>
        </div>
        <div className='time'>
          <TimerComponent milliseconds={milliseconds} />
        </div>  
      </div>
    </article>
  );
};

export default FirstPage;
