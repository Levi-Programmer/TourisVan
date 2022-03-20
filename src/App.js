//Rutas 

import { Routes, Route, BrowserRouter } from 'react-router-dom'; 

//Pages

import Home from './pages/home.js';
import Paquetes from './pages/paquetes.js';
import ShowBus from './pages/buses';
import Tour from './pages/cityTour';
import Lugares from './pages/lugares.js';
import Somos from './pages/quienesSomos.js';
import Notfound from './pages/notFound'
import Detalles from './pages/detalles.js';
//Components

import Navbar from './components/navbar.js';



function App() {
  return (
    <div>
    
    <Navbar/>

    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/paquetes' element={ <Paquetes/> } />
      <Route path='/buses' element={ <ShowBus/> } /> 
      <Route path='/citytour' element={ <Tour/> } /> 
      <Route path='/lugares' element={ <Lugares/> } />
      <Route path='quienesSomos' element={ <Somos/> } />
      <Route path='*' element={ <Notfound/> } />
      <Route path='/detalles' element={ <Detalles/> } />
    </Routes>

    </div>
   
  );
}

export default App;
