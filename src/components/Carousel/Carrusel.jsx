import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './Carousel.css'
function Carrusel(props) {
     
  return (
    <Carousel className="carruselReact">
      
      <Carousel.Item>
      <Link to={'/games/g8L6ui1yi5jgT6o39PyQ'}>
        <img
          className="d-block w-100"
          src="https://i3.wp.com/researchsnipers.com/wp-content/uploads/2022/08/Release-date-leaked-WoW-Dragonflight-was-set-to-release-on.jpg"
          alt="First slide"
        /></Link>
      </Carousel.Item>
      
      <Carousel.Item><Link to={'/games/StOaF4A7iBtfyj3Y1MhI'}>
        <img
          className="d-block w-100"
          src="https://www.gamingcoffee.com/wp-content/uploads/2020/07/cyberpunk-4.jpg"
          alt="Second slide"
        /></Link>
      </Carousel.Item>

   
      <Carousel.Item> <Link to={'/games/pwAH65745apOloDg4S7v'}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/KqHlnzu.jpg"
          alt="Third slide"
        /></Link>
      </Carousel.Item>

    </Carousel>
  );
}

export default Carrusel;