const API_URL = "https://catfact.ninja/facts";

let factIdNo;

const cleanCatFacts = (fact, factIdNo) => {
  let cleanedFact;
  Object.keys(fact).forEach((key) => {
    if (key.includes("fact")) {
      cleanedFact = { fact: fact[key], factId: factIdNo };
    }
  });
  return cleanedFact;
};

export const getCatFact = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      const jsonCatFacts = jsonResponse.data;

      factIdNo = 0

      const cleanedCatFacts = jsonCatFacts.map((object) => {
        
        factIdNo = factIdNo + 1;

        return cleanCatFacts(object, factIdNo);
      });
      console.log(cleanedCatFacts)
      return cleanedCatFacts;   // array of objects - cleaned cat facts
    })
    .catch((error) => {
      console.error(error);
    });
};