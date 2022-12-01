import styled from 'styled-components';

export const Container = styled.main`
  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, lightskyblue, white)
`;

export const SearchBox = styled.div`
  width: 50vw;
  height: 10vh;
`;
export const CardsContainer = styled.div`
  width: 95vw;
  height: 85vh;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: scroll;
`;