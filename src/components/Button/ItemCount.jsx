import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import './Button.css'

export default function ItemCount({ stock, initial, text, onAddToCart }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <Container className="itemCount">
    <Container className='counter'style={{display:'flex', justifyContent:'center'}}>
        <Button className='btnMenos'onClick={handleSubstract}>-</Button>
        <strong style={{marginLeft:'10px', marginRight:'10px', fontSize:'20px'}}> {count} </strong>

        <Button className='btnMas' onClick={handleAdd}>+</Button>
        </Container>
        <Container style={{display:'flex', justifyContent:'center'}}>
      <Button className='btnCarrito'onClick={() => {onAddToCart(count);}}>{text}</Button>
      </Container>
      </Container>
  );
}