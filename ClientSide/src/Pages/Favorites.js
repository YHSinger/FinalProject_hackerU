import React from "react";
import styled from "styled-components";
import useUser from "../hooks/useUser";
import Cards from "../Components/Cards/Cards";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction ?? "column"};
  width: 100%;
  min-height: 100vh;

  @media (max-width: 700px) {
    flex-wrap: unset;
    flex-direction: column;
  }
`;

const Favorites = () => {
  const { favorites } = useUser();
  return (
    <Container>
      <h1>Favorites page</h1>
      <Cards initialData={favorites} />
    </Container>
  );
};

export default Favorites;
