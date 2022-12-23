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

//  const updateRandomFact = async () => {
//     // move to services?
//     const apiFacts = await getCatFact();

//     const createNewRandomNumber = (randomNumber) => {
//       console.log("createNewRandomNumber function triggered");
//       randomNumber = Math.floor(Math.random() * apiFacts.length);
//       if (randomNumber === prevNum) {
//         createNewRandomNumber();
//       } else {
//         return randomNumber;
//       }
//     };

//     let randomNumber = Math.floor(Math.random() * apiFacts.length);

//     if (prevNum != randomNumber) {
//       setPrevNum(randomNumber);
//       const newRandomFact = apiFacts[randomNumber];
//       setRandomFact(newRandomFact);
//     } else {
//       randomNumber = createNewRandomNumber();
//       setPrevNum(randomNumber);
//       const newRandomFact = apiFacts[randomNumber];
//       setRandomFact(newRandomFact);
//     }
//   };