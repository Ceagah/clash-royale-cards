import styled from 'styled-components';
import { colors } from '../../styles/theme';

type pageProps = {
  backgroundColor?: string;
  textColor ?: string;
  backgroundImage?: string;
}

export const Container = styled.div.attrs((props: pageProps) => ({
  backgroundColor: props.backgroundColor,
  }))`
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : colors.background};
  width: 8vw;
  height: 20vh;
  border-radius: 20px;
  margin: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover{
    scale: 1.1;
    box-shadow: 5px 4px 1px rgba(0, 0, 0, .2)
  }
`;
export const CardName = styled.span.attrs((props: pageProps) => ({
  textColor: props.textColor,
  }))`
    color: ${(props) => props.textColor ? props.textColor : colors.black};
    text-align: center;
  `;

export const CardRarity = styled.span.attrs((props: pageProps) => ({
  textColor: props.textColor,
  }))`
    color: ${(props) => props.textColor ? props.textColor : colors.black};
    text-align: center;
  `;

export const CardImage = styled.img`
  width: 90%;
  height: 75%;
`;
