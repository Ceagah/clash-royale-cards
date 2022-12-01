import { useEffect, useState } from 'react';
import { colors } from '../../styles/theme';
import { CardImage, CardName, CardRarity, Container } from './styles';

export interface CardProps {
  sc_key: string;
  key: string;
  arena: number;
  description: string;
  elixir: number;
  name: string;
  rarity: string;
  type: string;
}

const Card = (props: CardProps) => {
  const [backgroundColor, setBackgroundColor] = useState(colors.background);
  const [textColor, setTextColor] = useState(colors.black);
  
  // const imagePath = `../../assets/cards-150-gold/${props.sc_key}.png`;

  function configBackgroundColor(rarity: string) {
    switch (rarity) {
      case 'Common':
        setBackgroundColor(colors.common);
        break;
      case 'Rare':
        setBackgroundColor(colors.rare);
        break;
      case 'Epic':
        setBackgroundColor(colors.epic);
        setTextColor(colors.white)
        break;
      case 'Legendary':
        setBackgroundColor(colors.legendary);
        break;
      case 'Champion':
        setBackgroundColor(colors.champion);
        break;
      default: setBackgroundColor(colors.background);
    }
  }
  useEffect(() => {
    configBackgroundColor(props.rarity)
  }, [])

  return (
    <Container backgroundColor={backgroundColor}>
    <CardImage src={`/assets/cards-150-gold/${props.sc_key}.png`} />
      <CardName textColor={textColor}>{props.name}</CardName>
      <CardRarity textColor={textColor}>{props.rarity}</CardRarity>
    </Container>
  );
}

export default Card;