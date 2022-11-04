import React from 'react';
import { Container } from 'react-bootstrap';
import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardReact.css'

function CardReact(props) {
    return (
        <Container className="cardReact">
      <Card className='cardStyle'>
      <Card.Img className='cardImg' variant="top" src ={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.detail}</Card.Text>
        <Card.Footer className='footer'>
        <Card.Text>${props.price}</Card.Text>
        <Card.Text>Stock: {props.stock}</Card.Text>
        <Link to={`/games/${props.id}`}>
        <Button className='buttonCard'variant="primary">COMPRAR</Button></Link>
        </Card.Footer >
      </Card.Body>
    </Card>
        </Container>
    );
  }
  
  export default CardReact;
