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

  const [prevNum, setPrevNum] = useState(0);

  const updateRandomFact = async () => {
    const apiFacts = await getCatFact();

    // let randomNumber = 0

    const createNewRandomNumber = (randomNumber) => {
      console.log("createNewRandomNumber function triggered");
      randomNumber = Math.floor(Math.random() * apiFacts.length);
      if (randomNumber === prevNum) {
        createNewRandomNumber();
      }
      else {
        return randomNumber;
      }
    };

    let randomNumber = Math.floor(Math.random() * apiFacts.length);

    if (prevNum != randomNumber) {
      console.log("they're different numbers!");
      console.log(
        "random number is",
        randomNumber,
        "check state for prev Num - now setting new prevNum to current random number via useState"
      );
      setPrevNum(randomNumber);
      const newRandomFact = apiFacts[randomNumber];
      setRandomFact(newRandomFact);
    } else {
      console.log(
        "new random number needed because randomNumber is",
        randomNumber
      );
      randomNumber = createNewRandomNumber();
      console.log(
        "randomNumber after createNewRandomNumber function is ",
        randomNumber,
        "check state for prev Num"
      );
      setPrevNum(randomNumber);
      const newRandomFact = apiFacts[randomNumber];
      setRandomFact(newRandomFact);
    }

    // randomNumber = createRandomNumber(randomNumber)

    // console.log(randomNumber)
  };

  //   if (prevNum != randomNumber) {
  //     console.log("prevNum should not equal randomNumber")
  //     console.log("prevNum is ", prevNum)
  //     console.log("randomNumber is ", randomNumber)
  //     setPrevNum(randomNumber);
  //     console.log("prevNum is now", prevNum)
  //     const newRandomFact = apiFacts[randomNumber];
  //     console.log("randomNumber is", randomNumber);
  //     setRandomFact(newRandomFact);
  //   } else {
  //     console.log("it's the same number!!!"); // working now
  //   }
  // };

  // console.log("randomFact is", randomFact);

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
