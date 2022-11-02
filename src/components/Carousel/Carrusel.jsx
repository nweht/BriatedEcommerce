import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrusel(props) {
  let carrusel = {display: 'flex',
    width: '100%',
    maxWidth: '60%',
    margin: '5% auto',
    justifyContent: 'center'};

   
    
  return (
    <Carousel style = {carrusel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i3.wp.com/researchsnipers.com/wp-content/uploads/2022/08/Release-date-leaked-WoW-Dragonflight-was-set-to-release-on.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gamingcoffee.com/wp-content/uploads/2020/07/cyberpunk-4.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/KqHlnzu.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;