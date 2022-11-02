import React from "react";
import { Container } from "react-bootstrap";
import './FlexWrapper.css';

function FlexWrapper(props) {
    
  return <Container className="flexWrapper" >{props.children}</Container>;
}

export default FlexWrapper;