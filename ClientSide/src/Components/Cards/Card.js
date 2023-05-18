import React from "react";
import { CardWrapper, Img, Clicked } from "./cardsStyles";
import useFavorite from "../../hooks/useFavorite";

const Card = (props) => {
  const { layout } = useFavorite(props.card);

  return (
    <CardWrapper>
      <Clicked onClick={() => props.openModal(props.card)}>
        <Img src={props.card.bizImage} alt="picture" />

        <p> {props.card.bizName} </p>
      </Clicked>
      {layout()}
    </CardWrapper>
  );
};
export default Card;
