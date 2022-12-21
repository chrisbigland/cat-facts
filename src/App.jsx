import styles from "./App.module.scss";
import { useState } from "react";
import { cleanup } from "@testing-library/react";

import { getCatFact } from "./services/catfacts.service";

const App = () => {
  const [facts, setFacts] = useState([]);
  const [randomFact, setRandomFact] = useState([]);

  const updateFacts = async () => {
    const apiFacts = await getCatFact();
    setFacts(apiFacts);
    console.log(facts);
  };

  const updateRandomFact = async () => {
    const apiFacts = await getCatFact();
    const randomNumber = Math.floor(Math.random() * 10); // * apiFacts.length
    const randomFact = apiFacts[randomNumber];
    setRandomFact(randomFact);
  };

  console.log("randomFact is", randomFact);

  // const getRandomFact = () => {
  //   const randomNum = Math.floor(Math.random() * 10)
  //   console.log("randomNum is", randomNum)
  //   cleanedCatFacts[randomNum]
  // }

  // const getRandomFact = () => {
  //   const randomNumber = Math.floor(Math.random() * .length) // Math.random creates a random number between 0 and 1. Math.floor rounds down and returns the largest integer less than or equal to a given number. Therefore This is going to give us a random whole number between 0 and 4 (or more if we add quotes)
  //   console.log(randomNumber)
  //   quoteText.innerHTML = quotes[randomNumber][0];

  //   background.style.backgroundImage = `url(${quotes[randomNumber][1]})`
  // }

  console.log();
  return (
    <>
      <button onClick={updateFacts}>Click Me For All The Cat Facts</button>
      <button onClick={updateRandomFact}>Click Me For A Random Cat Fact</button>
      <p>This is a random Cat Fact:{randomFact.fact}</p>
      <div className={styles.factGrid}>
        {facts.map((fact) => {
          return (
            <>
              <div className={styles.catFact} key={fact.factId}>
                {fact.fact}
              </div>
              <div></div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;

// next steps - show a random cat fact - do the logic inside the existing function and simply return something different.
// fix the id issue - keeps changing
// make the get random fact button dynamic by letting it times by the amount of facts (currently set to 10)
// let user select how many random cat facts they see on the page
// stylings
