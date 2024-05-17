import { useState } from 'react';
import Play from './components/Play.jsx'
import FirstPage from './components/FirstPage.jsx'; // Asegúrate de que la ruta sea correcta

const App = () => {
  // Estado que controla la visualización de FirstPage
  const [showFirstPage, setShowFirstPage] = useState(false);

  // Función que se llama al presionar el botón "Play"
  const handlePlayButtonClick = () => {
    setShowFirstPage(true);
  };

  return (
    <div>
      {/* Mostrar el botón "Play" si FirstPage no está visible */}
      {!showFirstPage && (
        <Play onButtonClick = {handlePlayButtonClick}/>
      )}
      {/* Mostrar el componente FirstPage si showFirstPage es verdadero */}
      {showFirstPage && <FirstPage />}
    </div>
  );
};

export default App;
