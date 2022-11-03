import React,{useState, useEffect} from 'react';
import { getJuegos, getJuegosByConsole, getUnJuego } from '../../services/firebase';

import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loader from '../Loader/Loader';
import { Container } from 'react-bootstrap';
import './ItemListContainer.css';

function ItemListContainer(props) {
  const [gamesList, setGamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const consoleID = params.consoleID;

  useEffect(() => {
    setGamesList([]);
    if (consoleID === undefined) {
      getJuegos().then((data) => {
        setGamesList(data);
        setIsLoading(false);
      });
    } else {
      getJuegosByConsole(consoleID).then((data) => {
        setGamesList(data);
        setIsLoading(false);
      });
    }
  }, [consoleID]);

  return (
    <Container>
      {isLoading ? <Loader /> : <ItemList gamesList={gamesList} />}
      </Container>
  );
}

export default ItemListContainer;