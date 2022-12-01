
import { Container } from './styles';

interface CardProps {
  key: string;
  arena: number;
  description: string;
  elixirCost: number;
  name: string;
  rarity: string;
  type: string;
  image: string;
}

const Card = (props:CardProps) => {
  return (
    <Container>
      <span>Card Component</span>
    </Container>
  );
}

export default Card;