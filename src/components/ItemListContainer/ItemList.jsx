import React from "react";

import CardReact from "../Card/CardReact";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemList(props) {
  return (
    <>
      <FlexWrapper>
        {props.gamesList.map((juego) => {
          return (
            <CardReact
              key={juego.id}
              id={juego.id}
              title={juego.title}
              img={juego.img}
              price={juego.price}
              detail={juego.detail}
              stock={juego.stock}
            />
          );
        })}
      </FlexWrapper>
    </>
  );
}

export default ItemList;