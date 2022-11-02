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
    <Container >
    <div style={{display:'flex', justifyContent:'center'}}>
        <Button className='btnMasMenos'onClick={handleSubstract}>-</Button>

        <strong style={{marginLeft:'10px', marginRight:'10px', fontSize:'30px'}}> {count} </strong>

        <Button className='btnMasMenos' onClick={handleAdd}>+</Button>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
      <Button className='btnCarrito'onClick={() => {onAddToCart(count);}}>{text}</Button>
      </div>
      </Container>
  );
}