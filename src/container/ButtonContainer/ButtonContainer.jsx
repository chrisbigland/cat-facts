import React from "react";
import "./ButtonContainer.scss";
import Button from "../../components/Button/Button";

const ButtonContainer = (props) => {
  const {updateFacts, updateRandomFact} = props;
  
  return (
    <div className="btnContainer">
      <Button
        buttonText="Show or hide all the cat facts"
        handleClick={updateFacts}
        buttonClassName="factBtn"
      />
      <Button
        buttonText="Give me a random cat fact!"
        handleClick={updateRandomFact}
        buttonClassName="randomBtn"
      />
    </div>
  );
};

export default ButtonContainer;
