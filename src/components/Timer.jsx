import useTimer from '../helpers/Timer.js'; // Asegúrate de que la ruta es correcta

const TimerComponent = () => {
  const milliseconds = useTimer();

  // Convertir milisegundos a segundos
  const totalSeconds = milliseconds / 1000;
  
  // Calcular minutos y segundos
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds % 60).toFixed(1); // Mostrar segundos con un decimal

  // Formato del tiempo transcurrido
  const timeDisplay = minutes > 0
    ? `${minutes} MINUTO${minutes > 1 ? 'S' : ''} y ${seconds} SEGUNDOS`
    : `${seconds} SEGUNDOS`;

  return (
    <div>
      <p>TIEMPO TRANSCURRIDO: {timeDisplay}</p>
    </div>
  );
};

export default TimerComponent;
