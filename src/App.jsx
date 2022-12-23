import "./App.module.scss";
import { useState } from "react";
import { cleanup } from "@testing-library/react";

import { getCatFact } from "./services/catfacts.service";

import ButtonContainer from "./containers/ButtonContainer";
import GridContainer from "./containers/GridContainer/GridContainer";
import RandomFact from "./components/RandomFact"
import Heading from "./components/Heading/Heading";

const App = () => {
  const [facts, setFacts] = useState([]);
  const [randomFact, setRandomFact] = useState([]);
  const [factsShowing, setFactsShowing] = useState(false);
  // const [prevNum, setPrevNum] = useState(0);
  let prevNum = 0;

  const updateFacts = async () => {
    const apiFacts = await getCatFact();    // array of objects - cleaned cat facts
    setFacts(apiFacts);
    setFactsShowing(!factsShowing);
    console.log(facts);
  };


  const createRandomNumber = (prev, facts) => {
    let randomNumber = Math.floor(Math.random() * 5); // sets random number
    if (randomNumber === prev) {
      createRandomNumber(randomNumber, facts)
    } else {
      // setPrevNum(randomNumber)
      prevNum = randomNumber
      return randomNumber;
    }
  }


  // CREATE NEW, BRIEF UPDATERANDOMFACTS FUNCTION HERE AS ABOVE?

  const updateRandomFact = async () => {
    // move to services?
    const apiFacts = await getCatFact();    //waits for promise to resolve before setting apiFacts to result of getCatFact (cleaned facts - array of objects)

    let randomNumber = createRandomNumber(prevNum, apiFacts) // sets random number


    // const createNewRandomNumber = (randomNumber) => {           // function to create new random number - triggered if the same number as the previous one
    //   console.log("createNewRandomNumber function triggered");
    //   // randomNumber = Math.floor(Math.random() * apiFacts.length);
    //   if (randomNumber === prevNum) {
    //     createNewRandomNumber(randomNumber);
    //   } else {
    //     return randomNumber;
    //   }
    // };



    // if (prevNum != randomNumber) {    // checks if prev number same, if not, sets prev number and sets newRandomFact to index of new random number, otherwise runs createNewRandomNumber function
      const newRandomFact = apiFacts[randomNumber];
      newRandomFact.fact ? setRandomFact(newRandomFact) : setRandomFact(randomFact)
    // } else {
    //   randomNumber = createNewRandomNumber();
    //   setPrevNum(randomNumber);
    //   const newRandomFact = apiFacts[randomNumber];
    //   setRandomFact(newRandomFact);
    // }
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

// next steps - 
// work out why I get following error when scrolling through random facts quickly: uncaught TypeError: Cannot read properties of undefined (reading 'fact')
// let user select how many random cat facts they see on the page
