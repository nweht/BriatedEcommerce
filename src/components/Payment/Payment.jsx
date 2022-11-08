import React, { useState } from "react";
import { createPaymentOrder, get } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import PaymentForm from "./PaymentForm";
import '../CartView/Cart.css'
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";

export default function UserPaymentForm() {
  const navigate = useNavigate();
  const { cart, removeItem, getTotalPrice } = useContext(cartContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const orderData = {
      buyerData: userData,
      cart: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    createPaymentOrder(orderData).then((respuesta) => {
        navigate(`/thankyou/${respuesta}`);
      });
  }

  return (
    <Container className='cartContainer'>
    <Container className='payForm'>

    <form onSubmit={onSubmit}>
      <PaymentForm
        value={userData.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      <PaymentForm
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      <PaymentForm
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <button type="submit">Crear orden</button>
    </form>

    </Container>
    </Container>
  );
}