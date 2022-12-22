import React from 'react'
import './Fact.scss'

const Fact = (props) => {
  const { fact } = props;
  return (
    <div className="catFact">
      {/* key={fact.factId} */}
      {fact.fact}
    </div>
  );
};

export default Fact
