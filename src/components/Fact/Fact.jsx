import React from 'react'
import './Fact.scss'

const Fact = (props) => {
  const { fact } = props;
  console.log("fact.factId is", fact.factId)
  return (
    <div className="catFact" >
      {fact.fact}
    </div>
  );
};

export default Fact
