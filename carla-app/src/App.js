import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar';
import imagen from './components/images/fondo.png'
import Itemlistcontainer from './components/Itemlistcontainer';
import Cart from './components/Cart';


function App() {
  return (
    <div className='container-fluid fondo_rosa' >
    <BrowserRouter>
     <NavBar/>
     <Routes>
     <Route path='/' element={<ItemlistContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemlistContainer/>} />
          <Route path='cart' element={<Cart />} />
          <Route path='detalle/:detalleId' element={<ItemDetailContainer/>} />
     </Routes>
     <div className="text-center">
          <img src={imagen} alt="Luna Lingerie" className="img-fluid"/>   
      </div> 
     <ItemDetailContainer/>
     <Itemlistcontainer props="hola"/>
     <Cart/>
     </BrowserRouter>
    </div>
  );
}

export default App;
