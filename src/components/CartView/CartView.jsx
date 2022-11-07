import React ,{useContext}from 'react'
import { Button, Container } from 'react-bootstrap';
import { cartContext } from '../../context/cartContext';
import { createPaymentOrder } from '../../services/firebase';
import '../ItemListContainer/ItemListContainer.css';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import '../ItemDetail/CardDetail.css'
import './Cart.css';
import CartItemCard from './CartItemCard';

function CartView() {
const {cart, getTotalPrice} = useContext(cartContext);

if(cart.length>0)
    return(
        <Container className='cartContainer'>

        <Container className='cartBox'>
        {cart.map(juego => (
                <CartItemCard
                key={juego.id}
                title={juego.title}
                img={juego.img}
                price={juego.price}
                detail={juego.detail}
                gameTotal={juego.count * juego.price}
                id={juego.id}
                count={juego.count}
                ></CartItemCard>
        ))}
        <Container>
        <Link to={'/payment'} style={{textDecoration:'none'}}>
        <Button className='paymentButton'>Realizar el Pago</Button></Link>
        </Container>
</Container>
</Container>
    );
return <Container className="flexDetailContainer">
        <Container className='contentBox'>

<h1>No hay Items en el Carrito</h1>
</Container>
<Container className='contentBox'>
<Link to={'/'}>
<Button className='returnButton'>Volver a la Tienda</Button>
</Link>
</Container>
    </Container>
}

export default CartView;