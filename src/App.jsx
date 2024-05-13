// import './App.css'
// import FirstPage from './components/FirstPage'
// import Play from './components/Play'
// import { useState } from 'react';


// function App() {
//   let [showFirstPage, setShowFirstPage] = useState(false);

//   const handleButtonClick = () => {
//     setShowFirstPage(true);

//   }
//   return (
//     <>
//       {showFirstPage ? (
//         <FirstPage className="firstPageStyle" />
//       ) : (
//         <Play onButtonClick={handleButtonClick} />
//       )}
//     </>
//   );
// }

// export default App

import './App.css'
import FirstPage from './components/FirstPage'
import Play from './components/Play'


function App() {

  return (
    <>
        <Play />
        <FirstPage className="firstPageStyle" />
    </>
  );
  }

export default App
