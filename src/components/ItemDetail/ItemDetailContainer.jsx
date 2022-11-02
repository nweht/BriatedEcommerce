import React, { useState, useEffect } from "react";

import { getUnJuego } from "../../services/firebase";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

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
    <FlexWrapper>
      {feedbackMsg !== null ? (
        <h4>Error: {feedbackMsg}</h4>
      ) : (
        <ItemCard juego={juego} />
      )}
    </FlexWrapper>
  );
}

export default ItemDetailContainer;