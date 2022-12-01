import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

const Home: React.FC = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.get('/cards.json').then((response) => {
      const allCards = response.data;
      setCards(allCards);
    })
  },[])
  console.log(cards)
  return (
    <Container>
      <h1>Hello World Home Page</h1>
    </Container>
  );
}

export default Home;