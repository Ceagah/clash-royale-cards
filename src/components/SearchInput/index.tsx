import Icon from '@mui/icons-material/Search';
import { InputHTMLAttributes } from 'react';
import {
  Container, SearchBox, SearchIcon, SearchLabel
} from './styles';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const SearchInput = (props: SearchProps) => {
  return (
    <Container>
      <SearchLabel>{props.label}</SearchLabel>
      <SearchBox {...props}/>
      <SearchIcon src={Icon}/>
    </Container>
  );
}

export default SearchInput;