import "./App.module.scss";
import { useState } from "react";
import { cleanup } from "@testing-library/react";

import { getCatFact } from "./services/catfacts.service";

import ButtonContainer from "./containers/ButtonContainer";
import GridContainer from "./containers/GridContainer/GridContainer";
import RandomFact from "./components/RandomFact";
import Heading from "./components/Heading/Heading";

const App = () => {
  const [facts, setFacts] = useState([]);
  const [randomFact, setRandomFact] = useState([]);
  const [factsShowing, setFactsShowing] = useState(false);
  let prevNum = 0;

  const updateFacts = async () => {
    const apiFacts = await getCatFact(); // array of objects - cleaned cat facts
    setFacts(apiFacts);
    setFactsShowing(!factsShowing);
    console.log(facts);
  };

  const createRandomNumber = (prev, facts) => {
    let randomNumber = Math.floor(Math.random() * facts.length); 

    if (randomNumber === prev) {
      randomNumber = createRandomNumber(prev, facts);
    }
    prevNum = randomNumber;
    return randomNumber;
  };

  const updateRandomFact = async () => {
    const apiFacts = await getCatFact(); //waits for promise to resolve before setting apiFacts to result of getCatFact (cleaned facts - array of objects)
    let randomNumber = createRandomNumber(prevNum, apiFacts);
    const newRandomFact = apiFacts[randomNumber];
    newRandomFact.fact
      ? setRandomFact(newRandomFact)
      : setRandomFact(randomFact);
  };

  return (
    <>
      <div>
        <Heading />
        <ButtonContainer
          updateFacts={updateFacts}
          updateRandomFact={updateRandomFact}
        />
        <RandomFact randomFact={randomFact} />
        <GridContainer facts={facts} factsShowing={factsShowing} />
      </div>
    </>
  );
};

export default App;
