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
    <Container  className='cardDetail'>
<Row className='mainRow'><Col >
<img  className='gameImage' src={juego.img} alt={juego.title}/>
</Col>

<Col  ><Row ><h2 className='title'>{juego.title}</h2>

</Row>
<br></br>
<Row><h6>
{juego.console}
<Col className='stock'></Col></h6></Row>

<Row className='detail'>
  <p>{juego.detail}</p>

</Row>
<br></br><br></br>

<Row className='priceStock'><h3><strong>${juego.price}</strong></h3>
<p>Stock: {juego.stock}</p>
</Row>
<Row className='itemCountContainer'>
<ItemCount onAddToCart={handleAddToCart} text='Agregar al Carrito' stock={juego.stock} initial={1} />
</Row>
</Col></Row></Container>
  );
  return (
  <Container  style={{display:'flex', justifyContent:'center',alignItems:'center', marginTop:'-10%'}} className='itemDetailContainer'>
  <Loader  />
  </Container>
)
}

export default ItemCard;