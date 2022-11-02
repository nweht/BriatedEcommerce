import React from "react";
import FixedNavBar from "./components/NavBar/FixedNavBar"
import Carrusel from './components/Carousel/Carrusel';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from "./context/cartContext";
function App(){
  return(
    <CartContextProvider>
    <BrowserRouter>
    <div style={{background:'url(https://wallpapercave.com/wp/wp2661692.jpg)', backgroundAttachment: 'fixed'}}>
    <FixedNavBar />

  <Routes>
<Route path="/" element={<><Carrusel /><ItemListContainer /></>}></Route>
<Route path="/games/:itemID" element={<ItemDetailContainer />}></Route>

<Route path="/console/:consoleID" element={<><ItemListContainer /></>}/>
<Route path="/cart" element={<ItemListContainer />}/>

            
</Routes>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
