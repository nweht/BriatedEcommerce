import React, { useState, useEffect } from "react";

import { getUnJuego } from "../../services/firebase";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import './CardDetail.css'
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import { Container } from "react-bootstrap";

function ItemDetailContainer(props) {
  const [juego, setJuego] = useState({});
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { itemID } = useParams();

  console.log("Item id", itemID );
  useEffect(() => {
    getUnJuego(itemID)
      .then((data) => {
        setJuego(data);
      })
      .catch((error) => {
        console.log("Catch?")
        setFeedbackMsg(error.message);
      });
  }, [itemID]);

  return (
    <Container className="flexDetailContainer">
      <Container className='contentBox'>
      {feedbackMsg !== null ? (
        <h4>Error: {feedbackMsg}</h4>
      ) : (
        <ItemCard juego={juego} />
      )}
      </Container>
    </Container>
  );
}

export default ItemDetailContainer;