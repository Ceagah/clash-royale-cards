import React, { useEffect, useState } from 'react';
import Card, { CardProps } from '../../components/Card';
import { api } from '../../services/api';
import { CardsContainer, Container, SearchBox } from './styles';

const Home: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    api.get('/cards.json').then((response) => {
      const allCards = response.data;
      setCards(allCards);
    })
  },[])
  return (
    <Container>
      <SearchBox></SearchBox>
      <CardsContainer>
      {cards && cards.length > 0 && cards.map((card) => 
        <Card 
          key={card.key} 
          arena={card.arena}
          description={card.description} 
          elixir={card.elixir}
          name={card.name}
          rarity={card.rarity}
          type={card.type}
          sc_key={card.sc_key}
        />
      )}
      </CardsContainer>
      
    </Container>
  );
}

export default Home;