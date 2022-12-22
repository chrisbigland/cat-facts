import "./App.scss";
import { useState } from "react";
import { getCatFact } from "./services/catfacts.service";
import CatFactCard from "./components/CatFactCard/CatFactCard";
import Header from "./components/Header/Header";
import ButtonContainer from "./container/ButtonContainer/ButtonContainer";

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
          <div key={fact.factId}>
            <CatFactCard
              factId={fact.factId}
              fact={fact.fact}
            />
          </div>
        );
      })
    : console.log("content should be hidden");

  console.log();
  return (
    <>
      <div>
        <Header />
        <ButtonContainer updateFacts={updateFacts} updateRandomFact={updateRandomFact}/>
      </div>

      <div className="randomFactContainer">
        <div className="randomFact">
          <p>
            <span className="randomFactTitle">Random Cat Fact: </span>
            {randomFact.fact}
          </p>
        </div>
      </div>
      <div className="gridContainer">
        <div className="factGrid">{factContent}</div>
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
