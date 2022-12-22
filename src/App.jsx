import styles from "./App.module.scss";
import { useState } from "react";
import { cleanup } from "@testing-library/react";
// import cat from "./Random-cat-fact-img.png";

import { getCatFact } from "./services/catfacts.service";

const App = () => {
  const [facts, setFacts] = useState([]);
  const [randomFact, setRandomFact] = useState([]);
  const [factsShowing, setFactsShowing] = useState(false);

  const updateFacts = async () => {
    const apiFacts = await getCatFact();
    setFacts(apiFacts);
    setFactsShowing(!factsShowing);
    console.log(facts);
  };

  const [prevNum, setPrevNum] = useState(0);

  const updateRandomFact = async () => {
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

  const factContent = factsShowing
    ? facts.map((fact) => {
        return (
          <>
            <div className={styles.catFact} key={fact.factId}>
              {fact.fact}
            </div>
          </>
        );
      })
    : console.log("content should be hidden");

  console.log();
  return (
    <>
      <div>
        <div className={styles.headingContainer}>
          <div className={styles.heading}>
          <h1 className={styles.heading1}>Cat Facts</h1>
          <p className={styles.description}>Click below for a selection of our favourite cat facts!</p>
          </div>
        </div>
        <div className={styles.btnContainer}>
          {" "}
          {/* button container */}
          <button className={styles.factBtn} onClick={updateFacts}>
            Show or hide all the cat facts
          </button>{" "}
          {/* all facts button*/}
          <button className={styles.randomBtn} onClick={updateRandomFact}>
            {" "}
            {/* random fact button*/}
            Give me a random cat fact!
          </button>
        </div>
        
      </div>

      {/* <img>{cat}</img> */}
      {/* <img src="./Random-cat-fact-img.png" /> */}
      <div className={styles.randomFactContainer}>
        <div className={styles.randomFact}>
        <p><span className={styles.randomFactTitle}>Random Cat Fact: </span>{randomFact.fact}</p>
      </div>

      </div>
      <div className={styles.gridContainer}>
        <div className={styles.factGrid}>{factContent}</div>
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
