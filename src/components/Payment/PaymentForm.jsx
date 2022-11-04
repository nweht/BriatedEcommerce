import React from "react";
import { Container } from "react-bootstrap";

export default function PaymentForm(props) {
  return (
    <Container className="payCard">
      <label style={{ width: "100px", marginRight: 4 }}>{props.title}</label>
      <input
        value={props.value}
        required={props.required}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </Container>
  );
}