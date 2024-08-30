import { useState } from 'react';
import WritingExercise from './WritingExercise'; // Ajusta la ruta según tu estructura de carpetas
import ValidationMessage from './ValidationMessage'; // Importa el nuevo componente de validación
import Swal from 'sweetalert2'; // Importa SweetAlert2

const helpContent = {
  teclado: "El teclado es el dispositivo de entrada que permite al usuario introducir texto y comandos en el ordenador.",
  mouse: "El ratón es un dispositivo señalador que se utiliza para interactuar con la interfaz gráfica de usuario.",
  monitor: "El monitor es el dispositivo de salida que muestra la información visual generada por el ordenador.",
  gabinete: "El gabinete es la carcasa que alberga y protege los componentes internos del ordenador, como la placa base y el disco duro.",
  parlante: "Los parlantes son dispositivos de salida que permiten escuchar el sonido generado por el ordenador.",
  camara: "La cámara web es un dispositivo de entrada que captura imágenes y videos en tiempo real.",
  estabilizador: "El estabilizador es un dispositivo que regula y protege el flujo de electricidad hacia el ordenador.",
  modem: "El módem es un dispositivo que conecta el ordenador a Internet o a una red externa."
};

const FirstPage = () => {
  const inputCount = 8; // Número total de inputs
  const [validStates, setValidStates] = useState(new Array(inputCount).fill(false));

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
      confirmButtonText: 'Cerrar',
      customClass: {
        title: 'custom-alert-title', // Usa la clase personalizada para el título
        backdrop: 'custom-alert-backdrop',
        confirmButton: 'custom-confirm-button',
      },
    });
  };

  return (
    <article className="game-background">
      <div className="inputs-style input-margin row">
        <h1 className="title">Escribe el nombre de cada componente:</h1>
        {Array.from({ length: inputCount }, (_, index) => (
          <WritingExercise 
            key={index} 
            index={index} 
            onValidStateChange={(isValid) => handleValidStateChange(index, isValid)} 
          />
        ))}
        <ValidationMessage allValid={allValid} />
        <h1 className="button ayudaButton" onClick={handleHelpClick}>Ayuda</h1>
      </div>
    </article>
  );
};

export default FirstPage;
