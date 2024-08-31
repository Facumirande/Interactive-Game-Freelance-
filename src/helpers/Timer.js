import { useState, useEffect } from 'react';

const useTimer = (initialMilliseconds = 0) => {
  const [milliseconds, setMilliseconds] = useState(initialMilliseconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setMilliseconds(prevMilliseconds => prevMilliseconds + 100); // Incrementa en 100 ms cada intervalo
    }, 100); // Actualiza cada 100 ms

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return milliseconds;
};

export default useTimer;
