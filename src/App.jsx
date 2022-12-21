import styles from "./App.module.scss";
import { useState } from "react";

const App = () => {
  const [facts, setFacts] = useState([]);

  const API_URL = "https://catfact.ninja/facts";

  const cleanedCatFacts = (fact) => {
    const factsArr = [];
    Object.keys(fact).forEach((key) => {
      if (key.includes("fact")) {
        factsArr.push(fact[key]);
      }
    });
    console.log(factsArr);
  };
  // cleanedCatFacts removes the 'length' from the fact and adds in a unique ID. It gets all the keys from the fact and then adds the key to the facts array if it is called 'fact'.

  const getCatFact = () => {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((jsonResponse) => {
        // console.log(jsonResponse.data)
        cleanedCatFacts(jsonResponse.data[0]);
        setFacts(jsonResponse.data);
        console.log("facts are", facts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <button onClick={getCatFact}>Click Me</button>
      <div className={styles.factGrid}>
        {facts.map((fact) => {
          return (
            <div className={styles.catFact} key={facts.indexOf(fact)}>
              {fact.fact}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;

// next steps - clean facts by removing the length and adding in a unique id.
