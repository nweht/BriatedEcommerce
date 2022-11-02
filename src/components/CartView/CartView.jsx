import React ,{useContext}from 'react'
import { Button, Container } from 'react-bootstrap';
import { cartContext } from '../../context/cartContext';
import { createPaymentOrder } from '../../services/firebase';
import FlexWrapper from '../FlexWrapper/flexwrapper';
import CardCart from './CardCart';
import styles from '../ItemListContainer/ItemListContainer.css';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import './CartCard.css'

function CartView() {
const {cart, getTotalPrice} = useContext(cartContext);
    console.log(cart);


if(cart.length>0)
    return(
        <Container className='itemDetailContainer'>
        <Container className='divDetail' >
        <FlexWrapper>
        {cart.map(juego => (
            <div>
                <CardCart
                key={juego.id}
                title={juego.title}
                img={juego.img}
                price={juego.price}
                detail={juego.detail}
                gameTotal={juego.count * juego.price}
                id={juego.id}
                count={juego.count}
                ></CardCart>
                
            </div>
        ))}
        </FlexWrapper>
        <Link to={'/payment'}>
        <Button className='paymentButton'>Realizar el Pago</Button></Link>
    </Container>
    </Container>
    );
return <Container className='itemDetailContainer'>
<Container className='divDetail'>
<FlexWrapper>
<h1>No hay Items en el Carrito</h1>
</FlexWrapper>
<FlexWrapper>
<Link to={'/'}>
<Button className='returnButton'>Volver a la Tienda</Button>
</Link>

</FlexWrapper>

    </Container></Container>
}

export default CartView;