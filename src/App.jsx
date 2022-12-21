import styles from "./App.module.scss";
import { useState } from "react";
import { cleanup } from "@testing-library/react";

const App = () => {
  const [facts, setFacts] = useState([]);

  const API_URL = "https://catfact.ninja/facts";
  const factsArr = [];
  let factIdNo = 0;

  const cleanCatFacts = (fact, factIdNo) => {
    // fact is the object
    let cleanedFact;
    Object.keys(fact).forEach((key) => {
      //key is the key item in our new array here
      if (key.includes("fact")) {
        // factsArr.push(fact[key]);
        cleanedFact = { fact: fact[key], factId: factIdNo }; // sets the value of the key to this variable
      }
    });
    // console.log(factsArr);
    // return factsArr;
    console.log(cleanedFact);
    return cleanedFact;
  };
  // cleanCatFacts removes the 'length' from the fact, places it into a new array and I want it to add in a unique ID. It gets all the keys from the fact and then adds the key to the facts array if it is called 'fact' (basically adds all the facts into an array).

  // ISSUE HERE THAT I AM CREATING MULTIPLE ARRAYS?

  const getCatFact = () => {
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((jsonResponse) => {
        // console.log(jsonResponse.data)
        const jsonCatFacts = jsonResponse.data;
        console.log("jsonCatFacts is", jsonCatFacts); // an array of objects, each with a 'fact' and a 'length' key.

        const cleanedCatFacts = jsonCatFacts.map((object) => {
          // map over the array of objects. Each object gets passed into the cleanCatFacts function where an array of its keys are created (will be 2 items).
          factIdNo = factIdNo + 1;

          return cleanCatFacts(object, factIdNo); // each time cleanCatFacts() is run, I get returned an array containing just the fact. I WANT AN OBJECT instead
        });
        // const cleanedCatFacts = cleanCatFacts(jsonCatFacts);
        console.log(cleanedCatFacts);

        setFacts(cleanedCatFacts);
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
            <div className={styles.catFact} key={fact.factId}>
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
