import React from "react";
import "./ButtonContainer.scss";
import Button from "../../components/Button";

const ButtonContainer = (props) => {
  const { updateFacts, updateRandomFact } = props;

  return (
    <div className="btnContainer">
      {" "}
      {/*button container*/} {/* button container */}
      <Button updateFacts={updateFacts} text="Show or hide all the cat facts" />
      <Button
        updateFacts={updateRandomFact}
        text="Give me a random cat fact!"
      />
    </div>
  );
};

export default ButtonContainer;
