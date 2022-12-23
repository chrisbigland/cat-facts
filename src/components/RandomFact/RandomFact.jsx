import React from 'react'
import './RandomFact.scss'

const RandomFact = (props) => {
  const { randomFact } = props;
console.log(randomFact.fact)
  return (
    <div className="randomFactContainer">
      <div className="randomFact">
        <p>
          <span className="randomFactTitle">Random Cat Fact: </span>
          {randomFact.fact && randomFact.fact} 
        </p>
      </div>
    </div>
  );
}

export default RandomFact
