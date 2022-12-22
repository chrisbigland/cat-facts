const API_URL = "https://catfact.ninja/facts";

let factIdNo = 0;

const cleanCatFacts = (fact, factIdNo) => {
  let cleanedFact;
  Object.keys(fact).forEach((key) => {
    if (key.includes("fact")) {
      cleanedFact = { fact: fact[key], factId: factIdNo};
    }
  });
  return cleanedFact;
};

export const getCatFact = () => {

  return fetch(API_URL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      const jsonCatFacts = jsonResponse.data;

      const cleanedCatFacts = jsonCatFacts.map((object) => {
        factIdNo = factIdNo + 1;

        return cleanCatFacts(object, factIdNo);
      });

      return cleanedCatFacts;
    })
    .catch((error) => {
      console.error(error);
    });
};

// export const whatIsJson = () => {
//     console.log("cleanedCatFacts is ", cleanedCatFacts)
// }
