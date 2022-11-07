import React ,{useContext}from 'react'
import { Container } from 'react-bootstrap';
import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css'
import { cartContext } from '../../context/cartContext';
import {BsFillTrashFill} from 'react-icons/bs'


function CartItemCard(props) {
    const {cart, getTotalPrice} = useContext(cartContext);
    return (
        <Container className="cartCard">
        <Card className='cardStyle'>
        <Card.Img className='cardImg' variant="top" src ={props.img} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.detail}</Card.Text>
        <Card.Footer>
        <Card.Text>Precio Total: ${props.price*props.count}</Card.Text>
        <Card.Text>Cantidad: {props.count}</Card.Text>
        <Link to={`/games/${props.id}`}>
        <Button className='buttonTrash'variant="primary" style={{textDecoration:'none'}}><BsFillTrashFill ></BsFillTrashFill></Button></Link>
        </Card.Footer >
      </Card.Body>
    </Card>
        </Container>
    );
  }
  
  export default CartItemCard;