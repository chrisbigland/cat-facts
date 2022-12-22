import styles from "./App.module.scss";
import { useState } from "react";
import { cleanup } from "@testing-library/react";
// import cat from "./Random-cat-fact-img.png";

import { getCatFact } from "./services/catfacts.service";

import ButtonContainer from "./containers/ButtonContainer";
import GridContainer from "./containers/GridContainer/GridContainer";
import RandomFactContainer from "./containers/RandomFactContainer/RandomFactContainer";
import Heading from "./components/Heading/Heading";

const App = () => {
  const [facts, setFacts] = useState([]);
  const [randomFact, setRandomFact] = useState([]);
  const [factsShowing, setFactsShowing] = useState(false);
  const [prevNum, setPrevNum] = useState(0);

  const updateFacts = async () => {
    const apiFacts = await getCatFact();
    setFacts(apiFacts);
    setFactsShowing(!factsShowing);
    console.log(facts);
  };

  const updateRandomFact = async () => {
    // move to services?
    const apiFacts = await getCatFact();

    const createNewRandomNumber = (randomNumber) => {
      console.log("createNewRandomNumber function triggered");
      randomNumber = Math.floor(Math.random() * apiFacts.length);
      if (randomNumber === prevNum) {
        createNewRandomNumber();
      } else {
        return randomNumber;
      }
    };

    let randomNumber = Math.floor(Math.random() * apiFacts.length);

    if (prevNum != randomNumber) {
      setPrevNum(randomNumber);
      const newRandomFact = apiFacts[randomNumber];
      setRandomFact(newRandomFact);
    } else {
      randomNumber = createNewRandomNumber();
      setPrevNum(randomNumber);
      const newRandomFact = apiFacts[randomNumber];
      setRandomFact(newRandomFact);
    }
  };

  return (
    <>
      <div>
        <Heading />
        <ButtonContainer
          updateFacts={updateFacts}
          updateRandomFact={updateRandomFact}
        />
        <RandomFactContainer />
        <GridContainer facts={facts} factsShowing={factsShowing} />
      </div>

      <div className={styles.randomFactContainer}>
        {" "}
        {/*random fact container*/}
        <div className={styles.randomFact}>
          {" "}
          {/*random fact component*/}
          <p>
            <span className={styles.randomFactTitle}>Random Cat Fact: </span>
            {randomFact.fact}
          </p>
        </div>
      </div>
      <div className={styles.gridContainer}>
        {" "}
        {/*grid container*/}
        {/* <div className={styles.factGrid}>{factContent}</div> {/*grid component*/}
      </div>
    </>
  );
};

export default App;

// next steps - show a random cat fact - do the logic inside the existing function and simply return something different.
// fix the id issue - keeps changing
// work out why I get following error when scrolling through random facts quickly: uncaught TypeError: Cannot read properties of undefined (reading 'fact')
// make the get random fact button dynamic by letting it times by the amount of facts (currently set to 10)
// let user select how many random cat facts they see on the page
// stylings
