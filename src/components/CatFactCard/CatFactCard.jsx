import React from "react";
import "./CatFactCard.scss"

const CatFactCard = (props) => {
 const {fact, factId} = props;
  return (
    <div className="catFact" key={factId}>
      {fact}
    </div>
  );
};

export default CatFactCard;
