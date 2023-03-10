import React from 'react'
import './GridContainer.scss'
import Fact from '../../components/Fact/Fact';

const GridContainer = (props) => {
  const { facts, factsShowing } = props;
  const factContent = factsShowing 
    ? facts.map((fact) => {
        return <Fact fact={fact} key={fact.factId}/>;
      })
    : console.log("content should be hidden");

  return (
    <div className="gridContainer">
      <div className="factGrid">
    { factContent }
      </div>
    </div>
  );
};

export default GridContainer
