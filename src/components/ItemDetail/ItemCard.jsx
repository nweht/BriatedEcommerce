import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap';
import './CardDetail.css';
import ItemCount from '../Button/ItemCount';
import { useState } from 'react';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import Loader from '../Loader/Loader';


function ItemCard({juego}) {
  const [count, setCount] = useState(0);
  const {addToCart} = useContext(cartContext);

  function handleAddToCart(count) {
    addToCart(juego, count);
    setCount(count);
  }
    
if(juego.title)
  return (
    <Container  className='itemDetailContainer'>
    <Container  className='divDetail' >
<Row className='mainRow'><Col >
<img  className='gameImage' src={juego.img} alt={juego.title}/>
</Col>

<Col className='texto' ><Row>
{juego.title}
</Row>
<br></br>
<Row>
{juego.console} 
<Col >Stock: {juego.stock}</Col></Row>

<br></br><br></br>

<Row>
${juego.price}
</Row>
<ItemCount  onAddToCart={handleAddToCart} text='Agregar al Carrito' stock={juego.stock} initial={1} />

</Col></Row></Container></Container>
  );
  return (
  <Container  style={{display:'flex', justifyContent:'center',alignItems:'center', marginTop:'-10%'}} className='itemDetailContainer'>
  <Loader />
  </Container>
)
}

export default ItemCard;