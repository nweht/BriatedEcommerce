import React, { useState } from "react";
import { createPaymentOrder, get } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import InputForm from "./PaymentForm";
import FlexWrapper from "../FlexWrapper/flexwrapper";

export default function UserForm({ cart, getTotalPrice }) {
  const navigate = useNavigate();

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
    <Container className='itemDetailContainer'>
    <Container className='divDetail' >
      <FlexWrapper>
    <form onSubmit={onSubmit}>
      <InputForm
        value={userData.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <button type="submit">Crear orden</button>
    </form>
    </FlexWrapper>
    </Container>
    </Container>
  );
}