import React from 'react'
import './RandomFact.scss'

const RandomFact = (props) => {
  const { randomFact } = props;

  return (
    <div className="randomFactContainer">
        <p>
          <span className="randomFactTitle">Random Cat Fact: </span>
          <p className="randomFact">{randomFact.fact} </p>
        </p>
    </div>
  );
}

export default RandomFact
