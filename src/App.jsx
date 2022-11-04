import React from "react";
import FixedNavBar from "./components/NavBar/FixedNavBar"
import Carrusel from './components/Carousel/Carrusel';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from "./context/cartContext";
import './components/ItemListContainer/ItemListContainer.css';
import { Container } from "react-bootstrap";
import CartView from "./components/CartView/CartView";

function App(){
  return(
    <CartContextProvider >
    <BrowserRouter>
    <FixedNavBar />
    <Container className="background">
  <Routes>
   
<Route path="/" element={<><Carrusel /><ItemListContainer /></>}></Route>
<Route path="/games/:itemID" element={<ItemDetailContainer />}></Route>

<Route path="/console/:consoleID" element={<><ItemListContainer /></>}/>
<Route path="/cart" element={<CartView />}/>

            
</Routes>
</Container>
    </BrowserRouter>
    
    </CartContextProvider>
  )
}

export default App;
